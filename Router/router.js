import express from 'express'
import { createPost, getPost, deletePost, updatePost } from "../controler/postController.js"

const router = express.Router()

router.post('/create', createPost)

router.get('/fetch', getPost)

router.put("/edit", updatePost)

router.delete('/remove', deletePost)

export default router