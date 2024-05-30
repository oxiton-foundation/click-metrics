import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());




import userRouter from './src/routes/user.routes.js';

app.use('/api/v1/user',userRouter);


export {app};