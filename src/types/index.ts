import { Browser as BrowserCore } from "puppeteer-core";
import { Browser as PuppeteerBrowser } from "puppeteer";

export type UnifiedBrowser = PuppeteerBrowser | BrowserCore;

export interface LiveMatchesDetails {
  id: number;
  matchDetail: string;
  matchLink?: string;
  team1: string;
  team2: string;
  team1Score: string;
  team2Score: string;
  matchStatus: string;
}

interface BatterInfo {
  run: string;
  ball: string;
  "4s": string;
  "6s": string;
  sr: string;
}

interface BowlerInfo {
  over: string;
  maiden: string;
  run: string;
  wicket: string;
  eco: string;
}

export interface MatchDetails {
  matchStatus: string;
  toss: string;
  currentTeam: string;
  currentScore: string;
  currentRR: string;
  requiredRR: string;
  lastWicket: string;
  currentPartnership: string;
  target: string;
  oversLeft: string;
  last5Overs: string;
  batter1: string;
  batter1Stat: BatterInfo;
  batter2: string;
  batter2Stat: BatterInfo;
  bowler1: string;
  bowler1Stat: BowlerInfo;
}
