import { Team } from '../types';

interface TeamSelectorProps {
  teams: Team[];
  selectedTeam: Team | null;
  onSelectTeam: (team: Team) => void;
}

function TeamSelector({ teams, selectedTeam, onSelectTeam }: TeamSelectorProps) {
  // TODO: Implement team selection UI
  // Hints:
  // - Use a <select> dropdown or a list of buttons
  // - Display team name and maybe conference
  // - Call onSelectTeam when a team is selected

  return (
    <div className="team-selector">
      <h2>Select a Team</h2>
      {/* TODO: Add your UI here */}
    </div>
  );
}

export default TeamSelector;
