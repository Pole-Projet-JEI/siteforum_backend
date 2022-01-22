import express from "express";
import { createExposant , getExposants , getExposantByID , deleteExposant , updateExposant  } from "../controllers/exposant.js";

const router = express.Router();



//all routes in here are starting with /users
router.get('/',getExposants);
router.get('/:id',getExposantByID);
router.post('/',createExposant);
router.delete('/:id',deleteExposant);
router.patch('/:id',updateExposant);

export default router;