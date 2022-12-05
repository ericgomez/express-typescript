import { Request, Response, NextFunction } from "express";

export class HomeController {
  public index (req: Request, res: Response, next: NextFunction) {
    return res.render('home', { title: 'HomeController', text: 'Hello World' });
  }
}