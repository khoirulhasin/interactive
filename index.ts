import express from 'express';
import { routes } from '@routes/index';
import  { accessLog, errorLog, response } from '@middlewares/index';
import  dotenv  from 'dotenv';
import  dotenvExpand from 'dotenv-expand';

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


app.use('/', routes);

app.use(errorLog);

app.use((_, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(process.env.NODE_PORT, () => {
    console.log(`Example app listening on port ${process.env.NODE_PORT}`)
})