import Express, { Request, Response, Router } from "express";
import apicache from "apicache";
import * as cheerio from "cheerio";
import { MatchDetails } from "../../types";
import { liveMatchScoreSelectors } from "../../constants";
import randomUserAgent from "random-useragent";

const router: Express.Router = Router();

const getData = async (matchUrl: string) => {
  try {
      const response = await fetch(`${process.env.BASE_URL}${matchUrl}`, {
        headers: { "User-Agent": randomUserAgent.getRandom() },
      });
      const htmlContent = await response.text();
      const $ = cheerio.load(htmlContent);
  
      const matchStatus = $(liveMatchScoreSelectors.matchStatus).text();
      const toss = $(liveMatchScoreSelectors.toss).text();
      const currentTeam = $(liveMatchScoreSelectors.currentTeam).text();
      const currentScore = $(liveMatchScoreSelectors.currentScore).text();
      const currentRR = $(liveMatchScoreSelectors.currentRR).text();
      const requiredRR = $(liveMatchScoreSelectors.requiredRR).text();
      const lastWicket = $(liveMatchScoreSelectors.lastWicket)
        .text()
        .replace("Last Wkt: ", "");
      const currentPartnership = $(
        liveMatchScoreSelectors.currentPartnership
      ).text();
      const target = $(liveMatchScoreSelectors.target).text();
      const oversLeft = $(liveMatchScoreSelectors.oversLeft).text();
      const last5Overs = $(liveMatchScoreSelectors.last5Overs).text();
  
      const batter1 = $(liveMatchScoreSelectors.batter1).text();
      const batter1Stat = {
        run: $(liveMatchScoreSelectors.batter1Stat.run).text(),
        ball: $(liveMatchScoreSelectors.batter1Stat.ball).text(),
        "4s": $(liveMatchScoreSelectors.batter1Stat["4s"]).text(),
        "6s": $(liveMatchScoreSelectors.batter1Stat["6s"]).text(),
        sr: $(liveMatchScoreSelectors.batter1Stat.sr).text(),
      };
  
      const batter2 = $(liveMatchScoreSelectors.batter2).text();
      const batter2Stat = {
        run: $(liveMatchScoreSelectors.batter2Stat.run).text(),
        ball: $(liveMatchScoreSelectors.batter2Stat.ball).text(),
        "4s": $(liveMatchScoreSelectors.batter2Stat["4s"]).text(),
        "6s": $(liveMatchScoreSelectors.batter2Stat["6s"]).text(),
        sr: $(liveMatchScoreSelectors.batter2Stat.sr).text(),
      };
  
      const bowler1 = $(liveMatchScoreSelectors.bowler1).text();
      const bowler1Stat = {
        over: $(liveMatchScoreSelectors.bowler1Stat.over).text(),
        maiden: $(liveMatchScoreSelectors.bowler1Stat.maiden).text(),
        run: $(liveMatchScoreSelectors.bowler1Stat.run).text(),
        wicket: $(liveMatchScoreSelectors.bowler1Stat.wicket).text(),
        eco: $(liveMatchScoreSelectors.bowler1Stat.eco).text(),
      };
      const matchInfo: MatchDetails = {
        matchStatus,
        toss,
        currentTeam,
        currentScore,
        currentRR,
        requiredRR,
        lastWicket,
        currentPartnership: currentPartnership.replace(
          "Partnership:",
          "Balls(Runs):"
        ),
        target: target.includes("TAR") ? target.replace("TAR", "") : "",
        oversLeft,
        last5Overs: last5Overs.includes("5 overs")
          ? last5Overs.substring(last5Overs.indexOf(":") + 1)
          : "",
        batter1,
        batter1Stat,
        batter2,
        batter2Stat,
        bowler1,
        bowler1Stat,
      };
    return matchInfo;
  } catch (err) {
    console.error(err);
  }
};

router.get(
  "/",
  apicache.middleware("1 minute"),
  async function (req: Request, res: Response) {
    const headers = {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
    };
    res.writeHead(200, headers);

    const timeout = 60 * 1000;

    const matchUrl: string = req.query.matchUrl as string;

    const sendUpdate = async () => {
      try {
        const matchScore = await getData(matchUrl);
        res.write(`data: ${JSON.stringify(matchScore)}\n\n`);
      } catch (err) {
        console.log(err);
        res.write(
          `data: ${JSON.stringify({
            error: "Error getting match details",
          })}\n\n`
        );
      }
    };

    sendUpdate();

    const interval = setInterval(sendUpdate, timeout);

    req.on("close", () => {
      clearInterval(interval);
      res.end();
    });
  }
);

export default router;
