// Leaderboard page component
const LeaderboardPage = {
    data: {
        leaderboard: [],
        user: null
    },
    
    async render() {
        if (!this.data.leaderboard.length) {
            return `
                ${Header.render()}
                <div class="leaderboard-container">
                    <div class="loading-state">
                        <div class="spinner"></div>
                        <p>Loading leaderboard...</p>
                    </div>
                </div>
            `;
        }
        
        return `
            ${Header.render(this.data.user?.name)}
            <div class="leaderboard-container">
                <div class="leaderboard-content">
                    <div class="leaderboard-header">
                        <h2>🏆 Fundraising Leaderboard</h2>
                        <p>See how you stack up against your fellow interns!</p>
                    </div>
                    
                    <!-- Top 3 Podium -->
                    <div class="podium-section">
                        ${this.renderPodium()}
                    </div>
                    
                    <!-- Full Leaderboard Table -->
                    <div class="leaderboard-table-section">
                        <h3>All Rankings</h3>
                        <div class="leaderboard-table">
                            <div class="table-header">
                                <div class="rank-col">Rank</div>
                                <div class="name-col">Name</div>
                                <div class="code-col">Referral Code</div>
                                <div class="amount-col">Amount Raised</div>
                            </div>
                            <div class="table-body">
                                ${this.renderTableRows()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderPodium() {
        const top3 = this.data.leaderboard.slice(0, 3);
        if (top3.length < 3) return '';
        
        return `
            <div class="podium">
                <!-- 2nd Place -->
                <div class="podium-position second">
                    <div class="podium-rank">🥈</div>
                    <div class="podium-info">
                        <h4>${top3[1].name}</h4>
                        <p class="podium-code">${top3[1].referralCode}</p>
                        <p class="podium-amount">$${top3[1].amount.toLocaleString()}</p>
                    </div>
                </div>
                
                <!-- 1st Place -->
                <div class="podium-position first">
                    <div class="podium-rank">🥇</div>
                    <div class="podium-info">
                        <h4>${top3[0].name}</h4>
                        <p class="podium-code">${top3[0].referralCode}</p>
                        <p class="podium-amount">$${top3[0].amount.toLocaleString()}</p>
                    </div>
                </div>
                
                <!-- 3rd Place -->
                <div class="podium-position third">
                    <div class="podium-rank">🥉</div>
                    <div class="podium-info">
                        <h4>${top3[2].name}</h4>
                        <p class="podium-code">${top3[2].referralCode}</p>
                        <p class="podium-amount">$${top3[2].amount.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderTableRows() {
        return this.data.leaderboard.map(entry => {
            const isCurrentUser = this.data.user && entry.referralCode === this.data.user.referralCode;
            return `
                <div class="table-row ${isCurrentUser ? 'current-user' : ''}">
                    <div class="rank-col">
                        <span class="rank-number">#${entry.rank}</span>
                        ${entry.rank <= 3 ? this.getRankMedal(entry.rank) : ''}
                    </div>
                    <div class="name-col">
                        ${entry.name}
                        ${isCurrentUser ? '<span class="you-badge">You</span>' : ''}
                    </div>
                    <div class="code-col">${entry.referralCode}</div>
                    <div class="amount-col">$${entry.amount.toLocaleString()}</div>
                </div>
            `;
        }).join('');
    },
    
    getRankMedal(rank) {
        const medals = { 1: '🥇', 2: '🥈', 3: '🥉' };
        return medals[rank] || '';
    },
    
    async init() {
        try {
            // Load data from backend API
            this.data.leaderboard = await api.getLeaderboard();
            this.data.user = await api.getUserData();
            
            // Re-render with data
            document.getElementById('app').innerHTML = await this.render();
            
            // Initialize components
            Header.init();
            
        } catch (error) {
            console.error('Error loading leaderboard data:', error);
            // Fallback to show error message
            document.getElementById('app').innerHTML = `
                <div class="error-container">
                    <div class="error-content">
                        <h2>Unable to load leaderboard</h2>
                        <p>Please make sure the backend server is running on port 3001</p>
                        <button onclick="location.reload()" class="btn-primary">Retry</button>
                    </div>
                </div>
            `;
        }
    }
};

// Register leaderboard route
router.addRoute('/leaderboard', async () => {
    document.getElementById('app').innerHTML = await LeaderboardPage.render();
    LeaderboardPage.init();
});