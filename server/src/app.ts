import express from 'express';
import { Request, Response, Application } from 'express';
import  Aplicants  from './Data';


const bodyParser = require('body-parser')
const cors = require('cors');

 const USERS  = Aplicants



const app: Application = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  allowedHeaders: ['Content-Type',],
}));

app.get('/api/users',cors(), (_req: Request, res: Response) => {
  return res
  .status(200)
  .json({ PRODUCTS: USERS });
});



export default app;