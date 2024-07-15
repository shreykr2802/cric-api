const dataAndSelector = [
  {
    title: "Title",
    selector:
      "#main-container > div:nth-child(2) > div > div > div > div.ds-grow.ds-flex.ds-items-center > div > h1",
  },
  {
    title: "Update",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div.ds-flex.ds-justify-between.ds-items-center > div.ds-truncate > span.ds-flex.ds-items-center > div",
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
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo.ds-opacity-50.ds-mb-1 > div.ds-flex.ds-items-center.ds-min-w-0.ds-mr-1 > a > span",
  },
  {
    title: "Team2 - Score",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo.ds-opacity-50.ds-mb-1 > div.ds-text-compact-m.ds-text-typo.ds-text-right.ds-whitespace-nowrap",
  },
  {
    title: "Result",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > p",
  },
  {
    title: "Player of Match",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-bg-fill-content-prime.ds-mb-4 > div > div > div > div.ds-max-w-\\[75\\%\\].ds-mr-1 > div.ds-leading-\\[0\\]",
    backupSelector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-relative.ds-w-full.ds-scrollbar-hide.ds-mb-4 > div > div:nth-child(1) > div > div:nth-child(1) > div > div > div.ds-max-w-\\[75\\%\\].ds-mr-1 > div.ds-leading-\\[0\\]",
  },
  {
    title: "Player of Match - Stat",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-bg-fill-content-prime.ds-mb-4 > div > div > div > div.ds-ml-auto.ds-text-right.ds-leading-none",
    backupSelector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-relative.ds-w-full.ds-scrollbar-hide.ds-mb-4 > div > div:nth-child(1) > div > div:nth-child(1) > div > div > div.ds-ml-auto.ds-text-right.ds-leading-none",
  },
  {
    title: "Summary - Team1 - Batter1 - Name",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div.ds-flex.ds-flex-col > div:nth-child(1) > div.ds-w-1\\/2.ds-flex.ds-justify-between.ds-items-center.ds-py-2.ds-px-3.ds-border-r.ds-border-line > a > span",
  },
  {
    title: "Summary - Team1 - Batter1 - Stats",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div.ds-flex.ds-flex-col > div:nth-child(1) > div.ds-w-1\\/2.ds-flex.ds-justify-between.ds-items-center.ds-py-2.ds-px-3.ds-border-r.ds-border-line > span",
  },
  {
    title: "Summary - Team1 - Batter2 - Name",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div.ds-flex.ds-flex-col > div:nth-child(2) > div.ds-w-1\\/2.ds-flex.ds-justify-between.ds-items-center.ds-py-2.ds-px-3.ds-border-r.ds-border-line > a > span",
  },
  {
    title: "Summary - Team1 - Batter2 - Stats",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div.ds-flex.ds-flex-col > div:nth-child(2) > div.ds-w-1\\/2.ds-flex.ds-justify-between.ds-items-center.ds-py-2.ds-px-3.ds-border-r.ds-border-line > span",
  },
  {
    title: "Summary - Team2 - Batter1 - Name",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div.ds-flex.ds-flex-col > div:nth-child(1) > div.ds-w-1\\/2.ds-flex.ds-justify-between.ds-items-center.ds-py-2.ds-px-3.ds-border-r.ds-border-line > a > span",
  },
  {
    title: "Summary - Team2 - Batter1 - Stats",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div.ds-flex.ds-flex-col > div:nth-child(1) > div.ds-w-1\\/2.ds-flex.ds-justify-between.ds-items-center.ds-py-2.ds-px-3.ds-border-r.ds-border-line > span",
  },
  {
    title: "Summary - Team2 - Batter2 - Name",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div.ds-flex.ds-flex-col > div:nth-child(2) > div.ds-w-1\\/2.ds-flex.ds-justify-between.ds-items-center.ds-py-2.ds-px-3.ds-border-r.ds-border-line > a > span",
  },
  {
    title: "Summary - Team2 - Batter2 - Stats",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div.ds-flex.ds-flex-col > div:nth-child(2) > div.ds-w-1\\/2.ds-flex.ds-justify-between.ds-items-center.ds-py-2.ds-px-3.ds-border-r.ds-border-line > span",
  },
  {
    title: "Summary - Team1 - Bowler1 - Name",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div.ds-flex.ds-flex-col > div:nth-child(1) > div:nth-child(2) > a > span",
  },
  {
    title: "Summary - Team1 - Bowler1 - Stats",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div.ds-flex.ds-flex-col > div:nth-child(1) > div:nth-child(2) > span",
  },
  {
    title: "Summary - Team1 - Bowler2 - Name",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div.ds-flex.ds-flex-col > div:nth-child(2) > div:nth-child(2) > a > span",
  },
  {
    title: "Summary - Team1 - Bowler2 - Stats",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div.ds-flex.ds-flex-col > div:nth-child(2) > div:nth-child(2) > span",
  },
  {
    title: "Summary - Team2 - Bowler1 - Name",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div.ds-flex.ds-flex-col > div:nth-child(1) > div:nth-child(2) > a > span",
  },
  {
    title: "Summary - Team2 - Bowler1 - Stats",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div.ds-flex.ds-flex-col > div:nth-child(1) > div:nth-child(2) > span",
  },
  {
    title: "Summary - Team2 - Bowler2 - Name",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div.ds-flex.ds-flex-col > div:nth-child(2) > div:nth-child(2) > a > span",
  },
  {
    title: "Summary - Team2 - Bowler2 - Stats",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div > div:nth-child(2) > div.ds-bg-fill-content-prime.lg\\:ds-w-\\[64\\%\\].lg\\:ds-border-r.lg\\:ds-border-line > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div.ds-flex.ds-flex-col > div:nth-child(2) > div:nth-child(2) > span",
  },
];

const dataAndSelectorLiveMatch = [
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
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div.ds-text-compact-m.ds-text-typo.ds-text-right.ds-whitespace-nowrap",
  },
  {
    title: "Toss",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > p",
  },
  {
    title: "Current - Stat",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(1) > div:nth-child(2) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden > div > div:nth-child(1) > div > div > div > div > div.ds-text-tight-s.ds-font-regular.ds-overflow-x-auto.ds-scrollbar-hide.ds-whitespace-nowrap.ds-mt-1.md\\:ds-mt-0.lg\\:ds-flex.lg\\:ds-items-center.lg\\:ds-justify-between.lg\\:ds-px-4.lg\\:ds-py-2.lg\\:ds-bg-fill-content-alternate.ds-text-typo-mid3.md\\:ds-text-typo-mid2",
  },
  {
    title: "Summary - Batter1 - info(Name (battingStyle), R, B, 4s, 6s, SR)",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div.ds-flex > div > table > tbody:nth-child(2) > tr:nth-child(1)",
  },
  {
    title: "Summary - Batter2 - info(Name (battingStyle), R, B, 4s, 6s, SR)",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div.ds-flex > div > table > tbody:nth-child(2) > tr:nth-child(2)",
  },
  {
    title: "Summary - Bowler1 - info(name (bowlingStyle), O, M, R, W, Eco)",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div.ds-flex > div > table > tbody:nth-child(4) > tr:nth-child(1)",
  },
  {
    title: "Summary - Bowler2 - info(name (bowlingStyle), O, M, R, W, Eco)",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div.ds-flex > div > table > tbody:nth-child(4) > tr:nth-child(2)",
  },
  {
    title: "Timeline",
    selector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div:nth-child(4)",
    backupSelector:
      "#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-mb-2 > div:nth-child(1) > div > div:nth-child(5)",
  },
];

export { dataAndSelector, dataAndSelectorLiveMatch };
