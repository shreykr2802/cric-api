import Express, { Request, Response, Router } from "express";
import puppeteer, { Browser, PuppeteerError } from "puppeteer";
import apicache from "apicache";

const router: Express.Router = Router();

const getData = async () => {
  let browser: Browser | null = null;
  try {
    browser = await puppeteer.launch({ headless: true, });
    const page = await browser.newPage();
    page.setCacheEnabled(false);
    await page.goto("https://www.espncricinfo.com/live-cricket-score");
    await page.setViewport({ width: 414, height: 896 });

    const pageData = await page.$$(
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5 > div.ds-flex.ds-space-x-5 > div > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(1) > div > div.ds-p-0 > div > div > div > div.ds-px-4.ds-py-3"
    );

    const matchDetailsPromise = pageData.map(
      async (data) =>
        await data.evaluate((el) => ({
          link: (el.children[0] as HTMLAnchorElement).href,
          innerText: el.innerText.replaceAll(/\n+/gm, "&&"),
        }))
    );

    const matchDetails = await Promise.all(matchDetailsPromise);
    await browser.close();
    return matchDetails;
  } finally {
    await browser?.close();
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
      console.log("----", (err as PuppeteerError).name)
      res.status(500).send("Error getting match details");
    }
  }
);

export default router;
