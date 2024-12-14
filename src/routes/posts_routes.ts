import express, { Request, Response } from "express";
const router = express.Router();

import postsController from "../controllers/posts_controller";

router.get("/", (req: Request, res: Response) => {
  postsController.getAllPosts(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  postsController.getPostById(req, res);
});

router.post("/", (req: Request, res: Response) => {
  postsController.createPost(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  postsController.deletePost(req, res);
});

export default router;
