import { Router, Request, Response } from 'express';

export const indexRouter = Router();

/* GET home page. */
indexRouter.get('/', (req: Request, res: Response) => {
  res.render('index', {
    title: 'Template Application Index',
    pages: [
      { address: "tests/simple-js-test", name: "Simple JS Test" },
      { address: "tests/websocket-test", name: "Websocket Test" }
    ]
  });
});
