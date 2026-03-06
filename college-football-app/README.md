# College Football Schedule Viewer

A React + TypeScript web application for viewing college football team schedules and results using the [College Football Data API](https://collegefootballdata.com/).


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


Update this to work for postseason/regular season distinction

## API Documentation

- API Docs: https://api.collegefootballdata.com/api/docs/
- Teams endpoint: `GET /teams/fbs`
- Games endpoint: `GET /games?year={year}&team={team}`

## Learning Resources

- [React useState Hook](https://react.dev/reference/react/useState)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [TypeScript with React](https://react.dev/learn/typescript)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

Good luck and have fun building!
