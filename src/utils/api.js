// Real API service for backend communication
const API_BASE_URL = 'http://localhost:3001/api';

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