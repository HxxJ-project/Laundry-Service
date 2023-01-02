const { json } = require('sequelize');
const { user } = require('../models');

class RegiRepository {

  createuser = async (nickname, password, phone_number, address) => {

    const existsUsers = await user.findAll({
      where: { nickname: nickname },
    });
    try {

      if (existsUsers.length) {
        console.log("이미 존재하는 닉네임입니다.")
        return existsUsers
      }
      
        const createRegiData = await user.create({ nickname, password, phone_number, address });
        console.log("레지스터 레퍼지토리 - 저장 성공 : 회원")
        return createRegiData;
        
    } catch (err) {
      console.log("회원가입중 알수 없는 에러 발생:",err);
      return
    }
  }
}

module.exports = RegiRepository;