import { Router, Request, Response } from 'express';

export const testsRouter = Router();

/* GET home page. */
testsRouter.get('/simple-js-test', (req: Request, res: Response) => {
    res.render('simple-js-test', {
        title: 'Simple JS Test'
    });
});

testsRouter.get('/websocket-test', (req: Request, res: Response) => {
    res.render('websocket-test', {
        title: 'Websocket Test'
    });
});