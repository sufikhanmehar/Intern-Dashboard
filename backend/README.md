# Backend API

Simple REST API for the Intern Dashboard that returns dummy data.

## Getting Started

```bash
npm install
npm start
```

Server runs on: `http://localhost:3001`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API status |
| GET | `/api/user` | User profile data |
| GET | `/api/leaderboard` | Rankings data |
| GET | `/api/rewards` | Achievements data |

## Sample Responses

### GET /api/user
```json
{
  "name": "John Doe",
  "referralCode": "johndoe2025", 
  "donationsRaised": 2450
}
```

### GET /api/leaderboard  
```json
[
  {"rank": 1, "name": "Alice Smith", "amount": 3200, "referralCode": "alicesmith2025"},
  {"rank": 2, "name": "John Doe", "amount": 2450, "referralCode": "johndoe2025"}
]
```

### GET /api/rewards
```json
[
  {"id": 1, "name": "First Steps", "unlocked": true, "requirement": "$0"},
  {"id": 2, "name": "Coffee Badge", "unlocked": true, "requirement": "$100"}
]
```

## Testing with Postman

Import these endpoints into Postman to test:
- GET http://localhost:3001/api/user  
- GET http://localhost:3001/api/leaderboard
- GET http://localhost:3001/api/rewards