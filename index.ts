import express, { Request } from 'express';
import { routes } from '@routes/index';
import  { accessLog, errorLog, response } from '@middlewares/index';
import  dotenv  from 'dotenv';
import  dotenvExpand from 'dotenv-expand';
import cors from 'cors';

const env = dotenv.config({
  path: `${process.cwd}/src/environment/.env`
})

console.log(process.cwd())

dotenvExpand.expand(env);

console.log(process.env)

const app = express();

app.use(accessLog);

app.use(express.json());

app.use(response);

app.use(cors<Request>());

// this is the routes
app.use('/', routes);

// show log error
app.use(errorLog);

app.use((_, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(process.env.NODE_PORT, () => {
    console.log(`Example app listening on port ${process.env.NODE_PORT}`)
})