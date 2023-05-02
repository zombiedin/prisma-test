import express from 'express';
import { userRouter } from './user';
import { deptRouter } from './dept';

export const routes = express.Router();

routes.use(userRouter);
routes.use(deptRouter)