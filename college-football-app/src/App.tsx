import { useState, useEffect } from 'react';
import './App.css';
import TeamSelector from './components/TeamSelector';
import SeasonSelector from './components/SeasonSelector';
import Schedule from './components/Schedule';
import { Team, Game } from './types';
import { fetchTeams, fetchGames } from './services/api';

function App() {
  // TODO: Set up state management
  // Hints:
  // - Use useState for teams (type: Team[])
  // - Use useState for selectedTeam (type: Team | null)
  // - Use useState for selectedSeason (type: number | null)
  // - Use useState for games (type: Game[])
  // - Use useState for loading state (type: boolean)

  // TODO: Fetch teams when component mounts
  // Hints:
  // - Use useEffect with empty dependency array []
  // - Call fetchTeams() from the API service
  // - Set loading state while fetching
  // - Handle errors with try/catch

  // TODO: Fetch games when team or season changes
  // Hints:
  // - Use useEffect with [selectedTeam, selectedSeason] as dependencies
  // - Only fetch if both selectedTeam and selectedSeason are not null
  // - Call fetchGames(year, teamName) from the API service
  // - Set loading state while fetching

  // TODO: Create handler functions
  // - handleTeamSelect: (team: Team) => void
  // - handleSeasonSelect: (year: number) => void

  const availableSeasons = [2024, 2023, 2022, 2021];

  return (
    <div className="app">
      <header>
        <h1>College Football Schedule Viewer</h1>
      </header>

      <main>
        {/* TODO: Show loading state */}
        {/* TODO: Pass the correct props to TeamSelector */}
        <TeamSelector
          teams={[]}
          selectedTeam={null}
          onSelectTeam={() => {}}
        />

        {/* TODO: Pass the correct props to SeasonSelector */}
        <SeasonSelector
          availableSeasons={availableSeasons}
          selectedSeason={null}
          onSelectSeason={() => {}}
        />

        {/* TODO: Only show Schedule when both team and season are selected */}
        {/* TODO: Pass the games from state to Schedule component */}
        <Schedule
          games={[]}
          teamName="Team Name"
        />
      </main>
    </div>
  );
}

export default App;
