import {PostController} from "./../controllers/PostController";
import {Router} from "express";

export class PostRoutes {
  public postController: PostController;
  public path: string = '/posts';

  constructor() {
    this.postController = new PostController();
  }
    
  public routes (router: Router): void {
    router
      .get(this.path, this.postController.index)
      .post(this.path, this.postController.store)
  }
}