// Dashboard page component
const DashboardPage = {
    data: {
        user: null,
        rewards: []
    },
    
    async render() {
        // Show loading state first
        if (!this.data.user) {
            return `
                ${Header.render()}
                <div class="dashboard-container">
                    <div class="loading-state">
                        <div class="spinner"></div>
                        <p>Loading your dashboard...</p>
                    </div>
                </div>
            `;
        }
        
        return `
            ${Header.render(this.data.user.name)}
            <div class="dashboard-container">
                <div class="dashboard-content">
                    <!-- Profile Section -->
                    <div class="profile-section">
                        <div class="profile-card">
                            <div class="profile-avatar">
                                <img src="${this.data.user.avatar}" alt="Profile Avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                <div class="avatar-fallback" style="display: none;">
                                    <span>${this.data.user.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                            </div>
                            <div class="profile-info">
                                <h3>${this.data.user.name}</h3>
                                <div class="referral-code">
                                    <span class="label">Referral Code:</span>
                                    <span class="code" id="referralCode">${this.data.user.referralCode}</span>
                                    <button class="copy-btn" id="copyBtn" title="Copy referral code">📋</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Donations Section -->
                    <div class="donations-section">
                        <div class="donations-card">
                            <h3>Total Donations Raised</h3>
                            <div class="donations-amount">
                                <span class="currency">$</span>
                                <span class="amount" id="donationsAmount">0</span>
                            </div>
                            <div class="donations-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${Math.min((this.data.user.donationsRaised / 5000) * 100, 100)}%"></div>
                                </div>
                                <span class="progress-text">Goal: $5,000</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Rewards Section -->
                    <div class="rewards-section">
                        <h3>Rewards & Achievements</h3>
                        <div class="rewards-grid">
                            ${this.renderRewards()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderRewards() {
        return this.data.rewards.map(reward => `
            <div class="reward-card ${reward.unlocked ? 'unlocked' : 'locked'}">
                <div class="reward-icon">${reward.icon}</div>
                <div class="reward-info">
                    <h4>${reward.name}</h4>
                    <p>${reward.description}</p>
                    <span class="reward-requirement">${reward.requirement}</span>
                </div>
                <div class="reward-status">
                    ${reward.unlocked ? '✅' : '🔒'}
                </div>
            </div>
        `).join('');
    },
    
    async init() {
        try {
            // Load data from backend API
            this.data.user = await api.getUserData();
            this.data.rewards = await api.getRewards();
            
            // Add avatar if not provided by backend
            if (!this.data.user.avatar) {
                this.data.user.avatar = "https://via.placeholder.com/150/007bff/ffffff?text=SM";
            }
            
            // Re-render with data
            document.getElementById('app').innerHTML = await this.render();
            
            // Initialize components
            Header.init();
            this.initComponents();
            
        } catch (error) {
            console.error('Error loading dashboard data:', error);
            // Fallback to show error message
            document.getElementById('app').innerHTML = `
                <div class="error-container">
                    <div class="error-content">
                        <h2>Unable to load dashboard</h2>
                        <p>Please make sure the backend server is running on port 3001</p>
                        <button onclick="location.reload()" class="btn-primary">Retry</button>
                    </div>
                </div>
            `;
        }
    },
    
    initComponents() {
        // Copy referral code functionality
        const copyBtn = document.getElementById('copyBtn');
        const referralCode = document.getElementById('referralCode');
        
        if (copyBtn && referralCode) {
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(referralCode.textContent).then(() => {
                    copyBtn.textContent = '✅';
                    setTimeout(() => {
                        copyBtn.textContent = '📋';
                    }, 2000);
                });
            });
        }
        
        // Animate donations counter
        this.animateCounter();
    },
    
    animateCounter() {
        const amountElement = document.getElementById('donationsAmount');
        if (!amountElement) return;
        
        const target = this.data.user.donationsRaised;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            amountElement.textContent = Math.floor(current).toLocaleString();
        }, duration / steps);
    }
};

// Register dashboard route
router.addRoute('/dashboard', async () => {
    document.getElementById('app').innerHTML = await DashboardPage.render();
    DashboardPage.init();
});