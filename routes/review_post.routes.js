const express = require("express");
const router = express.Router();

const ReviewPostController = require("../controllers/review_post.controller");
const reviewPostController = new ReviewPostController();

router.post("/review/:shop_id", reviewPostController.reviewPost);

module.exports = router;
