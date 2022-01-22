import express from "express";
import { createOrganisateur , getOrganisateurs , getOrganisateurByID , deleteOrganisateur , updateOrganisateur  } from "../controllers/organisateur.js";

const router = express.Router();

//all routes in here are starting with /users
router.get('/',getOrganisateurs);
router.get('/:id',getOrganisateurByID);
router.post('/',createOrganisateur);
router.delete('/:id',deleteOrganisateur);
router.patch('/:id',updateOrganisateur);

export default router;