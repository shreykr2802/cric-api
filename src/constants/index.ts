const liveSelectors = {
  mainSelector: '*[class="flex flex-col gap-px"]',
  matchDetails: ".flex.items-center.gap-1",
  team1: ".text-cbTxtPrim.dark\\:text-cbWhite.whitespace-nowrap",
  team1Score: ".font-medium.text-cbTxtPrim.dark\\:text-cbWhite.w-1\\/2",
  team2: ".text-cbTxtSec.dark\\:text-cbTxtSec.whitespace-nowrap",
  team2Score: ".font-medium.text-cbTxtSec.dark\\:text-cbTxtSec.w-1\\/2",
  matchStatusLive: ".text-cbLive.dark\\:text-cbLiveDark",
  matchStatusResult: ".text-cbComplete.dark\\:text-cbCompleteDark",
};

const liveMatchScoreSelectors = {
  matchStatus: ".text-cbPreview",
  toss: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.col-span-1.border.border-solid.border-cbBorderGrey.h-auto.hidden.wb\\:block > div > div.text-xs.text-cbTxtSec.p-2 > div:last-child",
  currentTeam: "div.flex.flex-row.justify-between.items-end > div > div.mr-2",
  currentScore: "div.flex.flex-col.gap-4 > div.flex.flex-row.justify-between.items-end > div > div:nth-child(2)",
  currentRR: "div.px-4.py-2.justify-between.items-center.hidden.tb\\:flex > div.flex.flex-col.gap-4 > div.flex.flex-row.justify-between.items-end > div > div:nth-child(3) > span.text-xs.font-normal",
  requiredRR: "div.px-4.py-2.justify-between.items-center.hidden.tb\\:flex > div.flex.flex-col.gap-4 > div.flex.flex-row.justify-between.items-end > div > div.ml-2.text-cbTxtSec > span.text-xs.font-normal",
  lastWicket: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.col-span-1.border.border-solid.border-cbBorderGrey.h-auto.hidden.wb\\:block > div > div.text-xs.text-cbTxtSec.p-2 > div:nth-child(2)",
  currentPartnership: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.col-span-1.border.border-solid.border-cbBorderGrey.h-auto.hidden.wb\\:block > div > div.text-xs.text-cbTxtSec.p-2 > div:nth-child(1)",
  target: "div.text-md.flex.flex-row.py-2.border-t.border-b.border-cbBorderGrey.justify-between > div > div:nth-child(1)",
  oversLeft: "div.text-md.flex.flex-row.py-2.border-t.border-b.border-cbBorderGrey.justify-between > div > div.inline-block.ml-4 > span.text-black",
  last5Overs: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.col-span-1.border.border-solid.border-cbBorderGrey.h-auto.hidden.wb\\:block > div > div.text-xs.text-cbTxtSec.p-2 > div:nth-child(3)",
  batter1: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div.flex.flex-col.gap-1.tb\\:flex-row.tb\\:justify-between.wb\\:flex-row.wb\\:justify-between",
  batter1Stat: {
    run: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div.flex.justify-center.items-center.text-sm.font-bold",
    ball: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div:nth-child(3)",
    "4s": "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div:nth-child(4)",
    "6s": "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div:nth-child(5)",
    sr: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(2) > div:nth-child(6)"
  },
  batter2:  "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div.flex.flex-col.gap-1.tb\\:flex-row.tb\\:justify-between.wb\\:flex-row.wb\\:justify-between",
  batter2Stat: {
    run:  "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div.flex.justify-center.items-center.text-sm.font-bold",
    ball: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div:nth-child(3)",
    "4s": "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div:nth-child(4)",
    "6s": "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div:nth-child(5)",
    sr: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div.text-sm.mb-2 > div:nth-child(3) > div:nth-child(6)"
  },
  bowler1: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div.flex.flex-col.gap-1.tb\\:flex-row.tb\\:justify-between.wb\\:flex-row.wb\\:justify-between > a",
  bowler1Stat: {
    over: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div:nth-child(2)",
    maiden: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div:nth-child(3)",
    run: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div:nth-child(4)",
    wicket: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div.flex.justify-center.items-center.text-sm.font-bold",
    eco: "div.grid.wb\\:grid-cols-3.mb\\:grid-cols-1.gap-x-5 > div.wb\\:col-span-2.mb\\:col-span-1 > div:nth-child(2) > div.grid.scorecard-bat-grid.tb\\:px-1.py-1.tb\\:scorecard-bat-grid-web.wb\\:scorecard-bat-grid-web > div:nth-child(6)"
  },
};

export { liveSelectors, liveMatchScoreSelectors };
