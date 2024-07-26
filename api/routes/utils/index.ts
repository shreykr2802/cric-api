import { NextFunction, Request, Response } from "express";

const checkSecret = (req: Request, res: Response, next: NextFunction) => {
  const secret = req.headers.secret === process.env.SECRET;
  if (secret) next();
  else res.status(401).send("Error fetching details");
};

export { checkSecret };
