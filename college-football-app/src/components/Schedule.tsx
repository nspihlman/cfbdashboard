import type { Game } from '../types';

interface ScheduleProps {
  games: Game[];
  teamName: string;
}

function Schedule({ games, teamName }: ScheduleProps) {
  // TODO: Implement schedule display
  // Hints:
  // - Map over the games array to display each game
  // - Show date, opponent, score (if completed)
  // - Consider showing home vs away games differently
  // - Format the date nicely (use Date object)
  // - Show final score if isCompleted is true

  return (
    <div className="schedule">
      <h2>{teamName} Schedule</h2>
      {/* TODO: Add your game list here */}
      {games.length === 0 && <p>No games found for this season.</p>}
    </div>
  );
}

export default Schedule;
