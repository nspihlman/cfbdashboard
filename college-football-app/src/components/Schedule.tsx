import type { Game } from '../types';

interface ScheduleProps {
  games: Game[];
  teamName: string;
}

function Schedule({ games, teamName }: ScheduleProps) {

  return (
    <div className="schedule">
      <h2>{teamName} Schedule</h2>
      <ul>
        {games.map((game) => {
          const isHome = game.homeTeam.school === teamName;
          const opponent = isHome ? game.awayTeam.school : game.homeTeam.school;
          const teamScore = isHome ? game.homeScore : game.awayScore;
          const oppScore = isHome ? game.awayScore : game.homeScore;
          const result = (game.isCompleted && teamScore != null && oppScore != null)
           ? teamScore > oppScore ? 'W' : 'L' : null;
          const score = result ? `${result} ${teamScore}-${oppScore}` : ''
          return(
            <li key={game.id}>
              <span>{new Date(game.date).toLocaleDateString()}</span>
              <span>{isHome ? "vs" : "@"} {opponent}</span>
              <span className={result === 'W' ? 'win': result === 'L' ? 'loss' : ''}>
                {score}</span>
            </li>
    )
  })}
      </ul>
      {games.length === 0 && <p>No games found for this season.</p>}
    </div>
  );
}

export default Schedule;
