import express from "express";
import { createFormateur , getFormateurs , getFormateurByID , deleteFormateur , updateFormateur  } from "../controllers/formateur.js";

const router = express.Router();



//all routes in here are starting with /users
router.get('/',getFormateurs);
router.get('/:id',getFormateurByID);
router.post('/',createFormateur);
router.delete('/:id',deleteFormateur);
router.patch('/:id',updateFormateur);

export default router;