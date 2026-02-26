interface SeasonSelectorProps {
  availableSeasons: number[];
  selectedSeason: number | null;
  onSelectSeason: (year: number) => void;
}

function SeasonSelector({ availableSeasons, selectedSeason, onSelectSeason }: SeasonSelectorProps) {
  // TODO: Implement season selection UI
  // Hints:
  // - Use a <select> dropdown or buttons
  // - Display the year (e.g., "2024", "2023")
  // - Call onSelectSeason when a season is selected

  return (
    <div className="season-selector">
      <h2>Select a Season</h2>
      {/* TODO: Add your UI here */}
    </div>
  );
}

export default SeasonSelector;
