const express = require("express");
const  router = express.Router();
const exposantController = require("../controllers/exposant.controller")


router.post("/add" ,exposantController.add)


module.exports = router ;