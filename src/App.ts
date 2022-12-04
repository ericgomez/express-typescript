import express from 'express';
import { HomeRoutes } from './routes/HomeRoutes';

class App {
  public app: express.Application;
  public router: express.Router;

  public homeRoutes: HomeRoutes = new HomeRoutes();

  constructor() {
    // initialize
    this.app = express();
    this.router = express.Router();

    this.routes();
  }

  private routes() {
    this.app.use('/', this.router);
    this.homeRoutes.routes(this.router);
  }
}

export default new App().app;