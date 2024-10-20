const express = require("express");
const router = express.Router();
const { handleHelloWorld } = require("../controllers/");

router.get("/", handleHelloWorld);

module.exports = router;
