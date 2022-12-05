import express from 'express';
import mongoose from 'mongoose';
import { HomeRoutes } from './routes/HomeRoutes';
import { PostRoutes } from './routes/PostRoutes';
import { AuthRoutes } from './routes/AuthRoutes';
import { config } from './config';

class App {
  public app: express.Application;
  public router: express.Router;
  public MONGO_URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}`;

  public homeRoutes: HomeRoutes = new HomeRoutes();
  public postRoutes: PostRoutes = new PostRoutes();
  public authRoutes: AuthRoutes = new AuthRoutes();

  constructor() {
    // initialize
    this.app = express();
    this.router = express.Router();

    this.configure();
    this.configureMongo();
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
    this.postRoutes.routes(this.router);
    this.authRoutes.routes(this.router);
  }

  private configureMongo() {
    mongoose.connect(this.MONGO_URI);
  }
}

export default new App().app;