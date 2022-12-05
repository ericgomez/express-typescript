import {Router} from "express";
import {AuthController} from "./../controllers/AuthController";
import { check } from 'express-validator/check'

export class AuthRoutes {
  public authController: AuthController = new AuthController();

  public routes (router: Router): void {
    router
      .get('/login', this.authController.login)
      .post(
          '/login', 
          check('email', 'El email es requerido').isEmail(),
          check('password', 'Longitud mínima para el password: 6').isLength({min: 6}),
          this.authController.processLogin
      )
  }
}