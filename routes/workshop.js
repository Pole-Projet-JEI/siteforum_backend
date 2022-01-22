import express from "express";
import { createWorkshop, getWorkshops , getWorkshopByID , deleteWorkshop , updateWorkshop } from "../controllers/workshop.js";

const router = express.Router();



//all routes in here are starting with /users
router.get('/',getWorkshops);
router.get('/:id',getWorkshopByID);
router.post('/',createWorkshop);
router.delete('/:id',deleteWorkshop);
router.patch('/:id',updateWorkshop);

export default router;