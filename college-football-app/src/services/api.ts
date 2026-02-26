import type { Team, Game } from '../types';

const API_BASE_URL = 'https://api.collegefootballdata.com';

// TODO: Get your free API key from https://collegefootballdata.com/key
// and add it here or use environment variables
const API_KEY = import.meta.env.VITE_CFBD_API_KEY; // Add your API key here

/**
 * Fetches all FBS teams
 * API Endpoint: GET /teams/fbs
 * Docs: https://api.collegefootballdata.com/api/docs/?url=/api-docs.json#/teams/getTeams
 */
export async function fetchTeams(): Promise<Team[]> {
  const data = await fetch(API_BASE_URL + '/teams/fbs', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  }).then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });

  return data.map((item: any):Team => {
    if (!item.id) throw new Error(`Team missing id: ${JSON.stringify(item)}`);
    if (!item.school) throw new Error(`Team missing school: ${JSON.stringify(item)}`);
    return {id: item.id,
      school: item.school,
      abbreviation: item.abbreviation ?? null,
      conference: item.conference ?? null,
      logo: item.logos[0] ?? null,
      mascot: item.mascot ?? null
    };
  });
}

/**
 * Fetches games for a specific team and year
 * API Endpoint: GET /games
 * Docs: https://api.collegefootballdata.com/api/docs/?url=/api-docs.json#/games/getGames
 * @param year - The season year
 * @param teamId - The team abbreviation (e.g., "Alabama", "Ohio State")
 */
export async function fetchGames(year: number, team: string): Promise<Game[]> {
  const data = await fetch(API_BASE_URL + `/games?year=${year}&team=${team}`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  }).then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });
  console.log(data)
  return data.map((item: any): Game => {
    if (!item.id) throw new Error(`Game missing id: ${JSON.stringify(item)}`);
    if (!item.startDate) throw new Error(`Game missing startDate: ${JSON.stringify(item)}`);
    if (!item.homeTeam) throw new Error(`Game missing homeTeam: ${JSON.stringify(item)}`);
    if (!item.awayTeam) throw new Error(`Game missing awayTeam: ${JSON.stringify(item)}`);
    if (!item.completed) throw new Error(`Game missing completed: ${JSON.stringify(item)}`);
    return {id: item.id,
      date: item.startDate,
      homeTeam: {id: item.homeId, school: item.homeTeam},
      awayTeam: {id: item.awayId, school: item.awayTeam},
      isCompleted: item.completed,
      homeScore: item.homePoints ?? null,
      awayScore: item.awayPoints ?? null,
      venue: item.venue ?? null,
    }
  });
}
