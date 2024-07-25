import Express, { Request, Response, Router } from "express";
import apicache from "apicache";
import * as cheerio from "cheerio";
import { MatchDetails } from "../../types";

const router: Express.Router = Router();

const getData = async (matchUrl: string) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}${matchUrl}`);
    const htmlContent = await response.text();
    const $ = cheerio.load(htmlContent);

    const matchStatus = $(".text-cbPreview").text();
    const toss = $(
      "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.col-span-1.border.border-solid.border-cbBorderGrey.h-auto.hidden.wb\\:block > div > div.text-xs.text-cbTxtSec.p-2 > div:last-child"
    ).text();
    const currentTeam = $(
      "div.flex.flex-row.justify-between.items-end > div > div.mr-2"
    ).text();
    const currentScore = $(
      "div.flex.flex-col.gap-4 > div.flex.flex-row.justify-between.items-end > div > div:nth-child(2)"
    ).text();
    const currentRR = $(
      "div.px-4.py-2.justify-between.items-center.hidden.tb\\:flex > div.flex.flex-col.gap-4 > div.flex.flex-row.justify-between.items-end > div > div:nth-child(3) > span.text-xs.font-normal"
    ).text();
    const requiredRR = $(
      "div.px-4.py-2.justify-between.items-center.hidden.tb\\:flex > div.flex.flex-col.gap-4 > div.flex.flex-row.justify-between.items-end > div > div.ml-2.text-cbTxtSec > span.text-xs.font-normal"
    ).text();
    const currentPartnership = $(
      "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.col-span-1.border.border-solid.border-cbBorderGrey.h-auto.hidden.wb\\:block > div > div.text-xs.text-cbTxtSec.p-2 > div:nth-child(1)"
    ).text();
    const target = $(
      "div.text-md.flex.flex-row.py-2.border-t.border-b.border-cbBorderGrey.justify-between > div > div:nth-child(1)"
    ).text();
    const oversLeft = $(
      "div.text-md.flex.flex-row.py-2.border-t.border-b.border-cbBorderGrey.justify-between > div > div.inline-block.ml-4 > span.text-black"
    ).text();
    const last5Overs = $(
      "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.col-span-1.border.border-solid.border-cbBorderGrey.h-auto.hidden.wb\\:block > div > div.text-xs.text-cbTxtSec.p-2 > div:nth-child(3)"
    ).text();
    const lastWicket = $(
      "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.col-span-1.border.border-solid.border-cbBorderGrey.h-auto.hidden.wb\\:block > div > div.text-xs.text-cbTxtSec.p-2 > div:nth-child(2)"
    )
      .text()
      .replace("Last Wkt: ", "");
    const batter1 = $(
      "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div.flex.flex-col.gap-1.tb\\:flex-row.tb\\:justify-between.wb\\:flex-row.wb\\:justify-between"
    ).text();
    const batter1Stat = {
      run: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div.flex.justify-center.items-center.text-sm.font-bold"
      ).text(),
      ball: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div:nth-child(3)"
      ).text(),
      "4s": $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div:nth-child(4)"
      ).text(),
      "6s": $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div:nth-child(5)"
      ).text(),
      sr: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div:nth-child(6)"
      ).text(),
    };

    const batter2 = $(
      "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div.flex.flex-col.gap-1.tb\\:flex-row.tb\\:justify-between.wb\\:flex-row.wb\\:justify-between"
    ).text();
    const batter2Stat = {
      run: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div.flex.justify-center.items-center.text-sm.font-bold"
      ).text(),
      ball: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div:nth-child(3)"
      ).text(),
      "4s": $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div:nth-child(4)"
      ).text(),
      "6s": $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div:nth-child(5)"
      ).text(),
      sr: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div:nth-child(6)"
      ).text(),
    };

    const bowler1 = $(
      "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div.flex.flex-col.gap-1.tb\\:flex-row.tb\\:justify-between.wb\\:flex-row.wb\\:justify-between > a"
    ).text();
    const bowler1Stat = {
      over: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div:nth-child(2)"
      ).text(),
      maiden: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div:nth-child(3)"
      ).text(),
      run: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div:nth-child(4)"
      ).text(),
      wicket: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div.flex.justify-center.items-center.text-sm.font-bold"
      ).text(),
      eco: $(
        "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div:nth-child(6)"
      ).text(),
    };
    const matchInfo: MatchDetails = {
      matchStatus: matchStatus,
      toss: toss,
      currentTeam: currentTeam,
      currentScore: currentScore,
      currentRR: currentRR,
      requiredRR: requiredRR,
      lastWicket: lastWicket,
      currentPartnership: currentPartnership.replace(
        "Partnership:",
        "Balls(Run):"
      ),
      target: target.includes("TAR") ? target.replace("TAR", "") : "",
      oversLeft: oversLeft,
      last5Overs: last5Overs.includes("5 overs")
        ? last5Overs.substring(last5Overs.indexOf(":") + 1)
        : "",
      batter1: batter1,
      batter1Stat: batter1Stat,
      batter2: batter2,
      batter2Stat: batter2Stat,
      bowler1: bowler1,
      bowler1Stat: bowler1Stat,
    };
    return matchInfo;
  } catch (err) {
    console.error(err);
  }
};

router.get(
  "/",
  apicache.middleware("2 minutes"),
  async function (req: Request, res: Response) {
    try {
      const matchUrl: string = req.query.matchUrl as string;
      const matchScore = await getData(matchUrl);
      res.status(200).json(matchScore);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error getting match details");
    }
  }
);

export default router;
