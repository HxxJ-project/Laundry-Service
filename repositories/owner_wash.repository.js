const { wash_list, user, shop } = require("../models");

class OwnerWashRepository {
  // constructor(WashListModel, UserModel) {
  //   this.washListModel = WashListModel; // wash_list
  //   this.userModel = UserModel; // user
  // }
  findOwnerWashById = async (wash_id) => {
    const ownerWash = await wash_list.findByPk(wash_id);

    return ownerWash;
  };

  findUserWashById = async (wash_id) => {
    const userData = await wash_list.findOne({
      where: { wash_id },
      include: [
        {
          model: user, // this.userModel,
          required: true,
          attributes: ["nickname", "address", "phone_number"],
        },
      ],
    });
    return userData;
  };

  shopStatusZero = async (shop_id) => {
    let zero = 0;
    const shopStatusZero = await shop.update(
      { shop_status: zero },
      { where: { shop_id } }
    );
    return shopStatusZero;
  };

  statusUpdate = async (wash_id, status) => {
    const washStatus = await wash_list.update(
      { status },
      { where: { wash_id } }
    );
    return washStatus;
  };
}

module.exports = OwnerWashRepository;
