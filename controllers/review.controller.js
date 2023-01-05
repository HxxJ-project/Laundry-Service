const ReviewService = require('../services/review.service');

class ReviewController {
  reviewService = new ReviewService();

  reviewList =  async (req, res, next) => {

    const { shop_name } = res.locals.user;
    
    try {
      const shopReview = await this.reviewService.reviewList(shop_name);
  
      res.status(200).json({ data: shopReview });
    } catch (error) {
      res.status(400).json({errorMessage: error.message})
    };
  };
};

module.exports = ReviewController;