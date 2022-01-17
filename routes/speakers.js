import express from "express";
import { createSpeaker , getSpeakers , getSpeakerByID , deleteSpeaker , updateSpeaker  } from "../controllers/speaker.js";

const router = express.Router();



//all routes in here are starting with /users
router.get('/',getSpeakers);
router.get('/:id',getSpeakerByID);
router.post('/',createSpeaker);
router.delete('/:id',deleteSpeaker);
router.patch('/:id',updateSpeaker);

export default router;