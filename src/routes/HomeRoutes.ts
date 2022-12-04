import { Router } from 'express';
import { HomeController } from '../controllers/HomeController';
export class HomeRoutes {
  public HomeController: HomeController = new HomeController();

  public routes(router: Router) : void {
    router.get('/', this.HomeController.index)
  }
}
