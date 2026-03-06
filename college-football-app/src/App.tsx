import { useState, useEffect } from 'react';
import './App.css';
import TeamSelector from './components/TeamSelector';
import SeasonSelector from './components/SeasonSelector';
import Schedule from './components/Schedule';
import type { Team, Game } from './types';
import { fetchTeams, fetchGames } from './services/api';

function App() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeams()
      .then(setTeams)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedTeam || !selectedSeason) return;
    fetchGames(selectedSeason, selectedTeam.school)
      .then(setGames)
      .catch(console.error);
  }, [selectedTeam, selectedSeason]);

  const START_YEAR = 1936;
  const currentYear = new Date().getFullYear();
  const availableSeasons = Array.from(
    { length: currentYear - START_YEAR + 1 },
    (_, i) => currentYear - i)
  ;

  return (
    <div className="app">
      <header>
        <h1>College Football Schedule Viewer</h1>
      </header>

      <main>
        {loading && <p>Loading...</p>}
        <TeamSelector
          teams={teams}
          selectedTeam={selectedTeam}
          onSelectTeam={setSelectedTeam}
        />
        <SeasonSelector
          availableSeasons={availableSeasons}
          selectedSeason={selectedSeason}
          onSelectSeason={setSelectedSeason}
        />
        {selectedTeam && selectedSeason && (
          <Schedule
            games={games}
            teamName={selectedTeam.school}
          />
        )}
      </main>
    </div>
  );
}

export default App;
