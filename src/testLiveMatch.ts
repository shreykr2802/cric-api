import puppeteer, { Browser } from "puppeteer";

const selectorsTitle = [
  {
    title: "Title",
    selector:
      "#main-container > div:nth-child(2) > div > div > div > div.ds-grow.ds-flex.ds-items-center > div > h1",
  },
  {
    title: "Update",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div.ds-flex.ds-justify-between.ds-items-center > div.ds-truncate",
  },
  {
    title: "Team1 - Name",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div.ds-flex.ds-items-center.ds-min-w-0.ds-mr-1 > a > span",
  },
  {
    title: "Team1 - Score",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div.ds-text-compact-m.ds-text-typo.ds-text-right.ds-whitespace-nowrap",
  },
  {
    title: "Team2 - Name",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > a > span",
  },
  {
    title: "Team2 - Score",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo.ds-opacity-50.ds-mb-1 > div.ds-text-compact-m.ds-text-typo.ds-text-right.ds-whitespace-nowrap",
  },
  {
    title: "Toss",
    selector: "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > p"
  },
  {
    title: "Current - Stat",
    selector: "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div.ds-text-tight-s.ds-font-regular.ds-overflow-x-auto.ds-scrollbar-hide.ds-whitespace-nowrap.ds-mt-1.md\\:ds-mt-0.lg\\:ds-flex.lg\\:ds-items-center.lg\\:ds-justify-between.lg\\:ds-px-4.lg\\:ds-py-2.lg\\:ds-bg-fill-content-alternate.ds-text-typo-mid3.md\\:ds-text-typo-mid2"
  },
  {
    title: "Summary - Batter1 - info(Name (battingStyle), R, B, 4s, 6s, SR)",
    selector: "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div.ds-flex > div > table > tbody:nth-child(2) > tr:nth-child(1)"
  },
  {
    title: "Summary - Batter2 - info(Name (battingStyle), R, B, 4s, 6s, SR)",
    selector: "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div.ds-flex > div > table > tbody:nth-child(2) > tr:nth-child(2)"
  },
  {
    title: "Summary - Bowler1 - info(name (bowlingStyle), O, M, R, W, Eco)",
    selector: "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div.ds-flex > div > table > tbody:nth-child(4) > tr:nth-child(1)"
  },
  {
    title: "Summary - Bowler2 - info(name (bowlingStyle), O, M, R, W, Eco)",
    selector: "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div.ds-flex > div > table > tbody:nth-child(4) > tr:nth-child(2)"
  },
  {
    title: "Timeline",
    selector: "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div:nth-child(4)"
  }
];

const getData = async () => {
  let browser: Browser | null = null;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);

    await page.goto(
      "https://www.espncricinfo.com/series/lanka-premier-league-2024-1421415/kandy-falcons-vs-dambulla-sixers-18th-match-1428476/live-cricket-score"
    );
    await page.setViewport({ width: 414, height: 896 });

    const matchInfo = [];

    for (let title of selectorsTitle) {
      const data = await page.$(title.selector);
      matchInfo.push({
        title: title.title,
        value: await data?.evaluate((el) => (el as HTMLElement).innerText),
      });
    }

    console.log("Matche info ", matchInfo);
    await browser.close();
  } catch (err) {
    console.log("err", err);
  } finally {
    await browser?.close();
  }
};

getData();
