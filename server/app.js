import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';



const app = express();

app.use(cors());
app.use(express.json({limit: '10mb'}));
app.use(cookieParser());




import userRouter from './src/routes/user.routes.js';

app.use('/api/v1/user',userRouter);


export {app};