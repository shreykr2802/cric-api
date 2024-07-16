import { Browser as BrowserCore } from "puppeteer-core";
import { Browser as PuppeteerBrowser } from "puppeteer";

export type UnifiedBrowser = PuppeteerBrowser | BrowserCore;