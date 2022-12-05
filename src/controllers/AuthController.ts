import {Request, Response} from 'express';
import { validationResult } from 'express-validator/check'

export class AuthController {
  public login (req: Request, res: Response) {
    return res.render('login');
  }
    
  public processLogin (req: Request, res: Response) {
    const errors = validationResult(req);
    
    if ( ! errors.isEmpty()) {
      return res.render('login', {errors: errors.array()})
    }

    return res.send('success');
  }
}