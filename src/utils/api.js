// Real API service for backend communication
// Use environment-specific API URL
function getApiBaseUrl() {
    // Check if running locally
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:3001/api';
    }
    
    // Production API URLs (try multiple hosting services)
    const productionUrls = [
        'https://intern-dashboard-backend-production.up.railway.app/api',
        'https://intern-dashboard-backend.onrender.com/api',
        'https://intern-dashboard-backend.vercel.app/api'
    ];
    
    // For now, use Railway as primary
    return productionUrls[0];
}

const API_BASE_URL = getApiBaseUrl();

class APIService {
    async makeRequest(endpoint) {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error(`API request failed for ${endpoint}:`, error);
            throw error;
        }
    }
    
    async getUserData() {
        return await this.makeRequest('/user');
    }
    
    async getRewards() {
        return await this.makeRequest('/rewards');
    }
    
    async getLeaderboard() {
        return await this.makeRequest('/leaderboard');
    }
}

// Create global API instance
const api = new APIService();