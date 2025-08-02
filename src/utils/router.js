// Simple client-side router
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = '';
        this.init();
    }
    
    init() {
        window.addEventListener('hashchange', () => this.handleRouteChange());
        window.addEventListener('load', () => this.handleRouteChange());
    }
    
    addRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    navigate(path) {
        window.location.hash = path;
    }
    
    handleRouteChange() {
        const hash = window.location.hash.slice(1) || '/';
        this.currentRoute = hash;
        
        // Check if user is authenticated for protected routes
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        
        if (!isAuthenticated && hash !== '/' && hash !== '/login') {
            this.navigate('/login');
            return;
        }
        
        if (isAuthenticated && hash === '/login') {
            this.navigate('/dashboard');
            return;
        }
        
        const handler = this.routes[hash] || this.routes['/404'];
        if (handler) {
            handler();
        }
    }
    
    getCurrentRoute() {
        return this.currentRoute;
    }
}

// Create global router instance
const router = new Router();