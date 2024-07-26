import * as cheerio from "cheerio";
import randomUserAgent from "random-useragent";
import { LiveMatchesDetails } from "./types";
import { liveSelectors } from "./constants";

const getData: () => Promise<LiveMatchesDetails[]> = async () => {
  const liveMatchData: LiveMatchesDetails[] = [];
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/cricket-match/live-scores`,
      {
        headers: { "User-Agent": randomUserAgent.getRandom() },
      }
    );
    const htmlContent = await response.text();
    const $ = cheerio.load(htmlContent);
    const element = $(liveSelectors.mainSelector);
    element.children().each((index, ele) => {
      const matchDetail = $(ele).find(liveSelectors.matchDetails).text();
      const matchLink = $(ele).find("a").attr("href");
      const team1 = $(ele).find(liveSelectors.team1).text();
      const team1Score = $(ele).find(liveSelectors.team1Score).text();
      const team2 = $(ele).find(liveSelectors.team2).text();
      const team2Score = $(ele).find(liveSelectors.team2Score).text();
      const matchStatus =
        $(ele).find(liveSelectors.matchStatusLive).text() ||
        $(ele).find(liveSelectors.matchStatusResult).text();

      liveMatchData.push({
        id: index + 1,
        matchDetail,
        matchLink,
        team1,
        team2,
        team1Score,
        team2Score,
        matchStatus,
      });
    });
    return liveMatchData;
  } catch (err) {
    console.log("error", err);
    return liveMatchData;
  }
};

export async function GET(request: Request) {
  const data = await getData();
  return new Response(`${JSON.stringify(data)}`);
}
