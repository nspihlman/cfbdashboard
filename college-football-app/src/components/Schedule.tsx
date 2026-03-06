import type { Game } from '../types';

interface ScheduleProps {
  games: Game[];
  teamName: string;
}

function getRecord(gamesList: Game[], team: string) {
  let wins = 0, losses = 0;
  for (const game of gamesList) {
    const isHome = game.homeTeam.school === team;
    const teamScore = isHome ? game.homeScore : game.awayScore;
    const oppScore = isHome ? game.awayScore : game.homeScore;
    if (game.isCompleted && teamScore != null && oppScore != null) {
      if (teamScore > oppScore) wins++; else losses++;
    }
  }
  return `${wins}-${losses}`;
}

function Schedule({ games, teamName }: ScheduleProps) {
  const regularGames = games.filter(g => g.seasonType === 'regular');
  const postseasonGames = games.filter(g => g.seasonType === 'postseason');
  return (
    <div className="schedule">
      <h2>{teamName} Schedule <span className="overall-record">{getRecord(games, teamName)}</span></h2>
      <h3>Regular Season <span className="record-badge">{getRecord(regularGames, teamName)}</span></h3>
      <ul>
        {regularGames.map((game) => {
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
      {postseasonGames.length > 0 && (
        <>
          <h3>Postseason <span className="record-badge">{getRecord(postseasonGames, teamName)}</span></h3>
          <ul>{postseasonGames.map((game) =>{
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
                <span>
                  <div>{isHome ? "vs" : "@"} {opponent}</div>
                  {game.notes && <div className='game-notes'>{game.notes}</div>}
                  </span>
                <span className={result === 'W' ? 'win': result === 'L' ? 'loss' : ''}>
                  {score}</span>
              </li>
            )
          })}</ul>
        </>
      )}
      {games.length === 0 && <p>No games found for this season.</p>}
    </div>
  );
}

export default Schedule;
