import Express, { Request, Response, Router } from "express";
import { Page as PuppeteerPage } from "puppeteer";
import apicache from "apicache";
import { dataAndSelectorLiveMatch } from "../../constants";
import { UnifiedBrowser } from "../../types";
import { getPuppeteerLaunch } from "../utils";

const router: Express.Router = Router();

const getData = async (matchUrl: string) => {
  let browser: UnifiedBrowser | null = null;
  try {
    browser = await getPuppeteerLaunch();
    const page: PuppeteerPage = await browser.newPage() as PuppeteerPage;

    await page.goto(matchUrl);
    await page.setViewport({ width: 414, height: 896 });

    const matchInfo = [];

    for (let data of dataAndSelectorLiveMatch) {
      let pageData = await page.$(data.selector);
      if(!pageData && data.backupSelector) {
        pageData = await page.$(data.backupSelector);
      }
      matchInfo.push({
        title: data.title,
        value: await pageData?.evaluate((el) => (el as HTMLElement).innerText),
      });
    }

    await browser.close();
    return matchInfo;
  } finally {
    await browser?.close();
  }
};

router.get(
  "/",
  apicache.middleware("1 minute"),
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
