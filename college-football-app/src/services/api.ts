import { Team, Game } from '../types';

const API_BASE_URL = 'https://api.collegefootballdata.com';

// TODO: Get your free API key from https://collegefootballdata.com/key
// and add it here or use environment variables
const API_KEY = ''; // Add your API key here

/**
 * Fetches all FBS teams
 * API Endpoint: GET /teams/fbs
 * Docs: https://api.collegefootballdata.com/api/docs/?url=/api-docs.json#/teams/getTeams
 */
export async function fetchTeams(): Promise<Team[]> {
  // TODO: Implement API call to fetch teams
  // Hints:
  // - Use fetch() to make the API request
  // - Include headers with Authorization: `Bearer ${API_KEY}`
  // - Parse the JSON response
  // - Map the API response to match our Team interface
  // - Handle errors appropriately

  return [];
}

/**
 * Fetches games for a specific team and year
 * API Endpoint: GET /games
 * Docs: https://api.collegefootballdata.com/api/docs/?url=/api-docs.json#/games/getGames
 * @param year - The season year
 * @param teamId - The team abbreviation (e.g., "Alabama", "Ohio State")
 */
export async function fetchGames(year: number, team: string): Promise<Game[]> {
  // TODO: Implement API call to fetch games
  // Hints:
  // - Endpoint: `${API_BASE_URL}/games?year=${year}&team=${team}`
  // - Include Authorization header
  // - Map the API response to match our Game interface
  // - You'll need to create Team objects from the home_team and away_team data
  // - Check if home_points and away_points exist to determine if game is completed

  return [];
}
