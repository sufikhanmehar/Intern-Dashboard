const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data
const dummyData = {
  user: {
    name: "Sufi Mehar",
    referralCode: "sufimehar2025",
    donationsRaised: 2450
  },
  leaderboard: [
    { rank: 1, name: "Priya Sharma", amount: 3200, referralCode: "priyasharma2025" },
    { rank: 2, name: "Sufi Mehar", amount: 2450, referralCode: "sufimehar2025" },
    { rank: 3, name: "Arjun Patel", amount: 1800, referralCode: "arjunpatel2025" },
    { rank: 4, name: "Kavya Singh", amount: 1650, referralCode: "kavyasingh2025" },
    { rank: 5, name: "Rohan Gupta", amount: 1200, referralCode: "rohangupta2025" }
  ],
  rewards: [
    { id: 1, name: "First Steps", description: "Complete your profile", unlocked: true, requirement: "$0", icon: "👤" },
    { id: 2, name: "Coffee Badge", description: "Raise your first $100", unlocked: true, requirement: "$100", icon: "☕" },
    { id: 3, name: "Team Player", description: "Reach $500 in donations", unlocked: true, requirement: "$500", icon: "🤝" },
    { id: 4, name: "Rising Star", description: "Achieve $1000 milestone", unlocked: true, requirement: "$1000", icon: "⭐" },
    { id: 5, name: "Fundraiser Pro", description: "Reach $2500 in donations", unlocked: false, requirement: "$2500", icon: "🏆" },
    { id: 6, name: "Champion", description: "Hit the $5000 mark", unlocked: false, requirement: "$5000", icon: "👑" }
  ]
};

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Intern Dashboard API is running!' });
});

app.get('/api/user', (req, res) => {
  res.json(dummyData.user);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(dummyData.leaderboard);
});

app.get('/api/rewards', (req, res) => {
  res.json(dummyData.rewards);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});