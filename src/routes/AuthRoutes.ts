import {Router} from "express";
import {AuthController} from "./../controllers/AuthController";

export class AuthRoutes {
  public authController: AuthController = new AuthController();

  public routes (router: Router): void {
    router
      .get('/login', this.authController.login)
      .post('/login', this.authController.processLogin)
  }
}