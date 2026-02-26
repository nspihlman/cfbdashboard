export interface Team {
  id: string;
  name: string;
  abbreviation: string;
  conference?: string;
  logo?: string;
}

export interface Game {
  id: string;
  date: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore?: number;
  awayScore?: number;
  isCompleted: boolean;
  venue?: string;
}

export interface Season {
  year: number;
  games: Game[];
}
