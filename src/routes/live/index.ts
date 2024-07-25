import Express, { Request, Response, Router } from "express";
import apicache from "apicache";
import { LiveMatchesDetails } from "../../types";
import * as cheerio from "cheerio";
import { liveSelectors } from "../../constants";
import randomUserAgent from "random-useragent";

const router: Express.Router = Router();

const getData = async () => {
  try {
    const liveMatchData: LiveMatchesDetails[] = [];
    const response = await fetch(
      `${process.env.BASE_URL}/cricket-match/live-scores`, {
        headers: { "User-Agent": randomUserAgent.getRandom() },
      }
    );
    const htmlContent = await response.text();
    const $ = cheerio.load(htmlContent);
    const element = $(liveSelectors.mainSelector);
    element.children().each((index, ele) => {
      const matchDetail = $(ele).find(liveSelectors.matchDetails).text();
      const matchLink = $(ele).find("a").attr("href");
      const team1 = $(ele)
        .find(liveSelectors.team1)
        .text();
      const team1Score = $(ele)
        .find(liveSelectors.team1Score)
        .text();
      const team2 = $(ele)
        .find(liveSelectors.team2)
        .text();
      const team2Score = $(ele)
        .find(liveSelectors.team2Score)
        .text();
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
    return err;
  }
};

router.get(
  "/",
  apicache.middleware("2 minutes"),
  async function (req: Request, res: Response) {
    try {
      const liveMatches = await getData();
      res.status(200).json(liveMatches);
    } catch (err: unknown) {
      console.log(err);
      res.status(500).send("Error getting match details");
    }
  }
);

export default router;
