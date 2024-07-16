import express, { Express } from 'express';
import dotenv from 'dotenv';
import home from "./routes/home";
import live from "./routes/live";
import match from "./routes/match";
import livematch from "./routes/livematch";
import { checkSecret } from './routes/utils';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(checkSecret);

app.use('/', home);

app.use('/live', live);

app.use('/match', match)

app.use('/livematch', livematch)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});