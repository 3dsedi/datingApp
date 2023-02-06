import express from 'express';
import { Request, Response, Application } from 'express';
import  Aplicants  from './Data';
import Messages from './MessageDb';
import { User } from './models/User';


const bodyParser = require('body-parser')
const cors = require('cors');

 const USERS  = Aplicants
 const MESSAGES = Messages



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
  .json({ Users: USERS });
});
app.get('/api/messages',cors(), (_req: Request, res: Response) => {
  return res
  .status(200)
  .json({ messages: MESSAGES });
});

app.post('/api/users',cors(), (_req: Request, res: Response) => {
  const {name,gender,age, img, dsc} = _req.body;
  const newUser = new User (Date.now().toString(), gender, name, age, img, dsc);
  USERS.push(newUser);
  return res.status(201).json({message: 'user added' , Users: USERS })
});

export default app;