export interface Team {
  id: string;
  school: string;
  abbreviation?: string;
  conference?: string;
  logo?: string;
  mascot?: string
}

export interface Game {
  id: string;
  date: string;
  homeTeam: Team;
  awayTeam: Team;
  seasonType: "regular" | "postseason"
  homeScore?: number;
  awayScore?: number;
  isCompleted: boolean;
  venue?: string;
  notes?: string;
}

export interface Season {
  year: number;
  games: Game[];
}
