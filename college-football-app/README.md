# College Football Schedule Viewer

A React + TypeScript web application for viewing college football team schedules and results using the [College Football Data API](https://collegefootballdata.com/).

## Getting Started

### 1. Get Your API Key

1. Visit https://collegefootballdata.com/key
2. Sign up for a free API key
3. Add your API key to `src/services/api.ts`:
   ```typescript
   const API_KEY = 'your-api-key-here';
   ```

### 2. Run the Development Server

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

## Project Structure

```
src/
├── types/index.ts              # TypeScript interfaces for Team, Game, Season
├── services/api.ts             # API service functions (TODO: implement)
├── components/
│   ├── TeamSelector.tsx        # Team selection component (TODO: implement)
│   ├── SeasonSelector.tsx      # Season selection component (TODO: implement)
│   └── Schedule.tsx            # Schedule display component (TODO: implement)
├── App.tsx                     # Main app component (TODO: implement)
└── App.css                     # Styles
```

## What You Need to Implement

Look for `TODO` comments throughout the codebase. Here's the recommended order:

### Step 1: API Service (`src/services/api.ts`)
- Implement `fetchTeams()` to get all FBS teams
- Implement `fetchGames()` to get games for a specific team and year
- Test your API calls in the browser console

### Step 2: Components
- **TeamSelector**: Create a dropdown or list to select a team
- **SeasonSelector**: Create a dropdown or buttons to select a year
- **Schedule**: Display the list of games with scores

### Step 3: App State (`src/App.tsx`)
- Set up `useState` hooks for teams, games, selectedTeam, selectedSeason, and loading
- Implement `useEffect` to fetch teams on mount
- Implement `useEffect` to fetch games when team/season changes
- Create handler functions for team and season selection
- Pass the correct props to child components

### Step 4: Styling
- Customize `App.css` to make it look great
- Consider adding wins/losses indicators
- Make it responsive for mobile

## API Documentation

- API Docs: https://api.collegefootballdata.com/api/docs/
- Teams endpoint: `GET /teams/fbs`
- Games endpoint: `GET /games?year={year}&team={team}`

## Learning Resources

- [React useState Hook](https://react.dev/reference/react/useState)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [TypeScript with React](https://react.dev/learn/typescript)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Tips

- Start small: get one component working before moving to the next
- Use `console.log()` to debug your state and API responses
- Test your API calls in the browser Network tab
- TypeScript will help you catch errors - pay attention to the types!

Good luck and have fun building!
