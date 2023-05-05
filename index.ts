import express, { Request } from 'express';
import { routes } from '@routes/index';
import  { accessLog, errorLog, response } from '@middlewares/index';
import  dotenv  from 'dotenv';
import  dotenvExpand from 'dotenv-expand';
import cors from 'cors';
import '@config/database/mongo';
import csrf from 'csurf';

const env = dotenv.config({
  path: `${process.cwd}/src/environment/.env`
})


dotenvExpand.expand(env);

const app = express();

app.use(accessLog);

app.use(express.json());


// this is response
app.use(response);

app.use(cors<Request>());

// OWSP
app.disable( 'x-powered-by' );


// this is the routes
app.use('/', routes);

// show log error
app.use(errorLog);

app.use(csrf()) ;

app.use((_, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(process.env.NODE_PORT, () => {
    console.log(`Example app listening on port test ${process.env.NODE_PORT}`)
})