import Express, { Request, Response, Router } from "express";

const router: Express.Router = Router();

router.get("/", function (req: Request, res: Response) {
  res.send("LIve API v1.0");
});

export default router;
