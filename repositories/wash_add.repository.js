const { user, wash_list } = require("../models");

class WashAddRepository {
  // 세탁물 추가
  findUser = async (nickname) => {
    const userData = await user.findOne({});
    return userData;
  };

  washAdd = async (image, nickname, address, phone_number, extra) => {
    const washAddData = await wash_list.create({
      image,
      nickname,
      address,
      phone_number,
      extra,
    });
    return washAddData;
  };
}

module.exports = WashAddRepository;
