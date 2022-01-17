import express from "express";
import { v4 as uuidv4 } from 'uuid';
import { createSpeaker , getSpeakers , getSpeakerByID , deleteSpeaker , updateSpeaker  } from "../controllers/speaker.js";

const router = express.Router();

let speakers = [];

//all routes in here are starting with /users
router.get('/',getSpeakers);
router.get('/:id',getSpeakerByID);
router.post('/',createSpeaker);
router.delete('/:id',deleteSpeaker);
router.patch('/:id',updateSpeaker);

export default router;