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

    this.configure();
    this.routes();
  }

  private configure() {
    // middleware parses incoming requests with JSON payloads
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    
    // configure template engines
    this.app.set('views', './src/views');
    this.app.set('view engine', 'pug');
  }

  private routes() {
    this.app.use('/', this.router);
    this.homeRoutes.routes(this.router);
  }
}

export default new App().app;