import Post from '../models/Post';
import { CallbackError } from 'mongoose';
import { Request, Response } from "express";

export class PostController {
  public index (req: Request, res: Response) {
    Post.find({}, (err: CallbackError, posts: typeof Post[]) => {
      if (err) {
        return res.json(err);
      }

      return res.json(posts);
    })
  }

  public show (req: Request, res: Response) {
    Post.findById(req.params.id, (err: CallbackError, post: typeof Post) => {
      if (err) {
        return res.json(err);
      }

      return res.json(post);
    })
  }
    
  // create new posts
  public store (req: Request, res: Response) {
    let newPost = new Post(req.body);
    newPost.save((err, post) => {
      if (err) {
        return res.json(err);
      }

      return res.json(post);
    })
  }

  public update (req: Request, res: Response) {
    const query = {'_id': req.params.id};
    Post.findByIdAndUpdate(query, req.body, {upsert: true},(err, post) => {
      if (err) {
        return res.json(err);
      }

      return res.json('Post actualizado correctamente');
    })
  }

  public destroy (req: Request, res: Response) {
    const query = {'_id': req.params.id};
    Post.findByIdAndDelete(query,(err: CallbackError, post: typeof Post) => {
      if (err) {
        return res.json(err);
      }

      if (!post) {
        return res.json('El post no existe').status(404);
      }

      return res.json('Post eliminado correctamente');
    })
  }
}