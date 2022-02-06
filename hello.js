const express = require ('express');
const router = express.Router();
var helloController = require("../controllers/helloController");
router.get('/' , helloController.hello);
module.exports = router