import Express, { Request, Response, Router } from "express";
import puppeteer, { Browser } from "puppeteer";
import apicache from "apicache";
import { dataAndSelectorLiveNatch } from "../../constants";

const router: Express.Router = Router();

const getData = async (matchUrl: string) => {
  let browser: Browser | null = null;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(matchUrl);
    await page.setViewport({ width: 414, height: 896 });
    page.setDefaultNavigationTimeout(0);

    const matchInfo = [];

    for (let data of dataAndSelectorLiveNatch) {
      const pageData = await page.$(data.selector);
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
