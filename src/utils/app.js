// Main application initialization
class App {
    constructor() {
        this.init();
    }
    
    init() {
        // Register 404 route
        router.addRoute('/404', () => {
            document.getElementById('app').innerHTML = `
                <div class="error-container">
                    <div class="error-content">
                        <h1>404 - Page Not Found</h1>
                        <p>The page you're looking for doesn't exist.</p>
                        <button onclick="router.navigate('/dashboard')" class="btn-primary">
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            `;
        });
        
        // Initialize router - this will trigger the initial route
        this.checkInitialRoute();
        
        // Add some global event listeners
        this.addGlobalListeners();
    }
    
    checkInitialRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        
        // If no hash and user is authenticated, go to dashboard
        if (!hash || hash === '/') {
            if (isAuthenticated) {
                router.navigate('/dashboard');
            } else {
                router.navigate('/login');
            }
        }
        
        // Trigger route change
        router.handleRouteChange();
    }
    
    addGlobalListeners() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            router.handleRouteChange();
        });
        
        // Handle any uncaught errors
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
        });
        
        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            e.preventDefault();
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

// Also initialize if DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new App();
    });
} else {
    new App();
}