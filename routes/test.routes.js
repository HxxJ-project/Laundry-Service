const express = require("express");
const jwt = require("jsonwebtoken");

const authmiddleware = require("../middleware/auth-middleware");
const shopmiddleware = require("../middleware/auth-middleware_shop");

const app = express();
const router = express.Router();

router.post("/test", authmiddleware, async(req,res) => {
    console.log("하이");
    res.status(233).json({})
    return
})

router.post("/test2", shopmiddleware, async(req,res) => {
    console.log("하이");
    res.status(233).json({})
    return
})

module.exports = router;