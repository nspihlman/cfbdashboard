interface SeasonSelectorProps {
  availableSeasons: number[];
  selectedSeason: number | null;
  onSelectSeason: (year: number) => void;
}

function SeasonSelector({ availableSeasons, selectedSeason, onSelectSeason }: SeasonSelectorProps) {

  return (
    <div className="season-selector">
      <h2>Select a Season</h2>
      <select
        value={selectedSeason ?? ''}
        onChange={(e) => onSelectSeason(Number(e.target.value))}
      >
        {availableSeasons.map((szn) => (
          <option value={szn}>{szn}</option>
        ))}
      </select>
    </div>
  );
}

export default SeasonSelector;
