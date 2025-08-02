# Intern Dashboard - Full Stack Application

A complete full-stack intern dashboard with frontend and backend components.

## 🚀 Quick Start

### Run Frontend (Port 3000)
```bash
npm start
# Opens http://localhost:3000
```

### Run Backend API (Port 3001)  
```bash
cd backend
npm install
npm start
# API available at http://localhost:3001
```

### Demo Login
- **Email**: demo@intern.com
- **Password**: demo123
- (Any email/password actually works)

---

## Features

### 🔐 Authentication
- Dummy login/signup page (any email/password works)
- Session management with localStorage
- Protected routes

### 📊 Dashboard
- Intern profile with name and referral code
- Total donations raised with animated counter
- Progress bar towards goal ($5,000)
- Copy referral code functionality

### 🏆 Rewards System
- 6 different achievement badges
- Progress tracking based on donation amounts
- Visual lock/unlock states

### 🎯 Leaderboard
- Top 3 podium display
- Full rankings table
- Current user highlighting
- Responsive design

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Backend**: Node.js + Express.js
- **API**: REST endpoints with dummy data
- **Routing**: Custom client-side router
- **Styling**: Pure CSS with responsive design

## Getting Started

### Prerequisites
- Python 3 (for development server)
- Modern web browser

### Installation & Running

1. Navigate to the project directory:
   ```bash
   cd intern-dashboard
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and go to:
   ```
   http://localhost:8000
   ```

### Demo Credentials
- **Email**: demo@intern.com
- **Password**: demo123
- (Actually any email/password combination will work)

## 📡 API Endpoints

The backend provides these REST endpoints:

- `GET /api/user` - Returns user profile (name, referral code, donations raised)
- `GET /api/leaderboard` - Returns rankings data
- `GET /api/rewards` - Returns achievements/rewards data

### Test with Postman:
- `GET http://localhost:3001/api/user`
- `GET http://localhost:3001/api/leaderboard`
- `GET http://localhost:3001/api/rewards`

## Project Structure

```
intern-dashboard/
├── index.html              # Main HTML file
├── package.json            # Project configuration
├── src/
│   ├── components/
│   │   └── header.js       # Header component
│   ├── data/
│   │   └── mockData.js     # Mock data and API
│   ├── pages/
│   │   ├── login.js        # Login page
│   │   ├── dashboard.js    # Main dashboard
│   │   └── leaderboard.js  # Leaderboard page
│   ├── styles/
│   │   └── main.css        # All CSS styles
│   └── utils/
│       ├── router.js       # Client-side routing
│       └── app.js          # Main app initialization
└── public/                 # Static assets (empty for now)
```

## Mock Data

The application includes realistic mock data:
- User profile (John Doe, johndoe2025, $2,450 raised)
- 6 achievement rewards with different unlock requirements
- 8-person leaderboard with various amounts

## Features Overview

### Login Page
- Clean, modern design
- Dummy authentication (any credentials work)
- Responsive layout
- Demo credentials displayed

### Dashboard
- Profile card with avatar and referral code
- Animated donations counter
- Progress bar with goal visualization
- Rewards grid with lock/unlock states
- Copy-to-clipboard functionality

### Leaderboard
- Top 3 podium with special styling
- Full rankings table
- Current user highlighting
- Responsive table design

## Responsive Design

The application is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small mobile (< 480px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Next Steps (Backend Integration)

This frontend is designed to be easily integrated with a backend API. Key integration points:

1. Replace `mockAPI` calls in `mockData.js` with real API endpoints
2. Add proper authentication with JWT tokens
3. Connect to real database for user data, donations, and leaderboard
4. Add form validation and error handling
5. Implement real-time updates for donations and leaderboard

## License

MIT