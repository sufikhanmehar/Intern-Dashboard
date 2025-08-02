// Mock data for the intern dashboard
const mockData = {
    user: {
        name: "Sufi Mehar",
        referralCode: "sufimehar2025",
        donationsRaised: 2450,
        avatar: "https://ui-avatars.com/api/?name=Sufi+Mehar&background=007bff&color=ffffff&size=150&rounded=true"
    },
    
    rewards: [
        { id: 1, name: "First Steps", description: "Complete your profile", unlocked: true, requirement: "$0", icon: "👤" },
        { id: 2, name: "Coffee Badge", description: "Raise your first $100", unlocked: true, requirement: "$100", icon: "☕" },
        { id: 3, name: "Team Player", description: "Reach $500 in donations", unlocked: true, requirement: "$500", icon: "🤝" },
        { id: 4, name: "Rising Star", description: "Achieve $1000 milestone", unlocked: true, requirement: "$1000", icon: "⭐" },
        { id: 5, name: "Fundraiser Pro", description: "Reach $2500 in donations", unlocked: false, requirement: "$2500", icon: "🏆" },
        { id: 6, name: "Champion", description: "Hit the $5000 mark", unlocked: false, requirement: "$5000", icon: "👑" }
    ],
    
    leaderboard: [
        { rank: 1, name: "Priya Sharma", amount: 3200, referralCode: "priyasharma2025" },
        { rank: 2, name: "Sufi Mehar", amount: 2450, referralCode: "sufimehar2025" },
        { rank: 3, name: "Arjun Patel", amount: 1800, referralCode: "arjunpatel2025" },
        { rank: 4, name: "Kavya Singh", amount: 1650, referralCode: "kavyasingh2025" },
        { rank: 5, name: "Rohan Gupta", amount: 1200, referralCode: "rohangupta2025" },
        { rank: 6, name: "Ananya Joshi", amount: 950, referralCode: "ananyajoshi2025" },
        { rank: 7, name: "Vikram Reddy", amount: 800, referralCode: "vikramreddy2025" },
        { rank: 8, name: "Sneha Iyer", amount: 600, referralCode: "snehaiyer2025" }
    ]
};

// Utility functions for mock API
const mockAPI = {
    getUserData: () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockData.user), 300);
        });
    },
    
    getRewards: () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockData.rewards), 300);
        });
    },
    
    getLeaderboard: () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockData.leaderboard), 300);
        });
    }
};