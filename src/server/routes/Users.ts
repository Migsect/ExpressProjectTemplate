import { Router, Request, Response } from 'express';

export const usersRouter = Router();

/* GET users listing. */
usersRouter.get('/', (req: Request, res: Response) => {
  res.send('respond with a resource');
});
