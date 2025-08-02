// Header component for authenticated pages
const Header = {
    render(userName = 'User') {
        return `
            <header class="header">
                <div class="header-content">
                    <div class="header-left">
                        <h2 class="logo">Intern Dashboard</h2>
                    </div>
                    
                    <nav class="header-nav">
                        <a href="#/dashboard" class="nav-link ${router.getCurrentRoute() === '/dashboard' ? 'active' : ''}">
                            Dashboard
                        </a>
                        <a href="#/leaderboard" class="nav-link ${router.getCurrentRoute() === '/leaderboard' ? 'active' : ''}">
                            Leaderboard
                        </a>
                    </nav>
                    
                    <div class="header-right">
                        <div class="user-info">
                            <span class="user-name">Welcome, ${userName}</span>
                            <button class="logout-btn" id="logoutBtn">Logout</button>
                        </div>
                    </div>
                </div>
            </header>
        `;
    },
    
    init() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', this.handleLogout);
        }
    },
    
    handleLogout() {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userEmail');
        router.navigate('/login');
    }
};