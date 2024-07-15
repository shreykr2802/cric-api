import puppeteer, { Browser } from "puppeteer";

const getData = async () => {
  let browser: Browser | null = null;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.espncricinfo.com/live-cricket-score");
    await page.setViewport({ width: 414, height: 896 });
    
    const pageData = await page.$$(
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5 > div.ds-flex.ds-space-x-5 > div > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(1) > div > div.ds-p-0 > div > div > div > div.ds-px-4.ds-py-3"
    );

    const matchDetailsPromise = pageData.map(
      async (data) =>
        await data.evaluate((el) => ({
          link: (el.children[0] as HTMLAnchorElement).href,
          innerText: el.innerText.replaceAll(/\n+/gm, " ")
        }))
    );

    const matchDetails = await Promise.all(matchDetailsPromise);

    console.log("Matches", matchDetails);
    await browser.close();
  } catch (err) {
    console.log("err", err);
  } finally {
    await browser?.close();
  }
};

getData();
