import Chromium from "@sparticuz/chromium";
import { NextFunction, Request, Response } from "express";
import puppeteer from "puppeteer";
import puppeteerCore from "puppeteer-core";

const checkSecret = (req: Request, res: Response, next: NextFunction) => {
  const secret = req.headers.secret === process.env.SECRET;
  if (secret) next();
  else res.status(401).send("Error fetching details");
};

const getPuppeteerLaunch = async () => {
  console.log("process.env.ENVIRONEMNT", process.env.ENVIRONEMNT);
  return process.env.ENVIRONEMNT !== "dev"
    ? await puppeteerCore.launch({
        args: Chromium.args,
        defaultViewport: Chromium.defaultViewport,
        executablePath: await Chromium.executablePath(),
        headless: Chromium.headless,
        ignoreHTTPSErrors: true,
      })
    : await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
};
export { checkSecret, getPuppeteerLaunch };
