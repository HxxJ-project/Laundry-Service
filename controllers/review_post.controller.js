const ReviewPostService = require("../services/review_post.service");

class ReviewPostController {
  reviewPostService = new ReviewPostService();
  // 리뷰 작성하기
  reviewPost = async (req, res, next) => {
    const { shop_name } = req.params;
    console.log("1", res.locals.user);
    const nickname = res.locals.user.nickname;
    const user_id = res.locals.user.user_id;
    console.log("2", nickname);
    const { image, star_rating, content } = req.body;
    console.log("3", req.body);
    const reviewPostData = await this.reviewPostService.reviewPost(
      shop_name,
      image,
      star_rating,
      content,
      nickname,
      user_id
    );
    res.status(201).json({ data: reviewPostData });
  };
}
module.exports = ReviewPostController;
