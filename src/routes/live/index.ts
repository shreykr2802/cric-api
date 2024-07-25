import Express, { Request, Response, Router } from "express";
import apicache from "apicache";
import { LiveMatchesDetails } from "../../types";
import * as cheerio from "cheerio";

const router: Express.Router = Router();

const getData = async () => {
  try {
    const liveMatchData: LiveMatchesDetails[] = [];
    const response = await fetch(
      `${process.env.BASE_URL}/cricket-match/live-scores`
    );
    const htmlContent = await response.text();
    const $ = cheerio.load(htmlContent);
    const element = $('*[class="flex flex-col gap-px"]');
    element.children().each((index, ele) => {
      const matchDetail = $(ele).find(".flex.items-center.gap-1");
      const matchLink = $(ele).find("a").attr("href");
      const team1 = $(ele).find(
        ".text-cbTxtPrim.dark\\:text-cbWhite.whitespace-nowrap"
      );
      const team1Score = $(ele).find(
        $(".font-medium.text-cbTxtPrim.dark\\:text-cbWhite.w-1\\/2")
      );
      const team2 = $(ele).find(
        ".text-cbTxtSec.dark\\:text-cbTxtSec.whitespace-nowrap"
      );
      const team2Score = $(ele).find(
        ".font-medium.text-cbTxtSec.dark\\:text-cbWhite.w-1\\/2"
      );
      const matchStatus = $(ele).find(".text-cbLive.dark\\:text-cbLiveDark");
      liveMatchData.push({
        id: index + 1,
        matchDetail: matchDetail.text(),
        matchLink: matchLink,
        team1: team1.text(),
        team2: team2.text(),
        team1Score: team1Score.text(),
        team2Score: team2Score.text(),
        matchStatus: matchStatus.text(),
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
