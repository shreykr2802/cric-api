import Express, { Request, Response, Router } from "express";
import apicache from "apicache";

const router: Express.Router = Router();

const getData = async (matchUrl: string) => {
  try {
    return matchUrl;
  } catch (err) {
    console.error(err);
  }
};

router.get(
  "/",
  apicache.middleware("1 minute"),
  async function (req: Request, res: Response) {
    const headers = {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
    };
    res.writeHead(200, headers);

    const timeout = 60 * 1000;

    const matchUrl: string = req.query.matchUrl as string;

    const sendUpdate = async () => {
      try {
        const matchScore = await getData(matchUrl);
        res.write(`data: ${JSON.stringify(matchScore)}\n\n`);
      } catch (err) {
        console.log(err);
        res.write(
          `data: ${JSON.stringify({
            error: "Error getting match details",
          })}\n\n`
        );
      }
    };

    sendUpdate();

    const interval = setInterval(sendUpdate, timeout);

    req.on("close", () => {
      clearInterval(interval);
      res.end();
    });
  }
);

export default router;
