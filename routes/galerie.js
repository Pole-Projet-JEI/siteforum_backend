import express from "express";
import { createImg , getImgs , deleteImg   } from "../controllers/galerie.js";

const router = express.Router();



//all routes in here are starting with /users
router.get('/',getImgs);
router.post('/',createImg);
router.delete('/:id',deleteImg);


export default router;