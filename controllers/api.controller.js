const { response, request } = require('express');
const bcrypt = require('bcrypt');
const {validations} = require('../db/user.validations');
const saltRounds = 10;
const User = require('../db/user.model');
const Role = require('../db/role.model');
const getApi = (req, res = response) => {
  const {id} = req.params;
  res.json({
    mensaje: 'Hola mundo from controller',
    id: id
  });
};

const postApi = async (req = request, res = response) => {
  try {
    const myUser = { name, mail, password, image, role, state, google } = req.body;

    const isValidRole = await Role.findOne({ role: myUser.role });
    const isValidMail = await User.findOne({ mail: myUser.mail });
    if (isValidMail) {
      return res.status(400).json({"error": "Mail is duplicated"});
    }
    console.table(isValidRole);
    if (!isValidRole) {
      return res.status(400).json({"error": "Role is not valid"});
    } 

    //validations(req, res, next, myUser);
    const user = new User(myUser);
    const hash = bcrypt.hashSync(password, saltRounds);
    user.password = hash;
    await user.save();
    let p = bcrypt.compareSync(password, hash);
    res.json({
      message: 'User created',
      user: user,
  });
  } catch (error) {
    res.json({
      message: 'Error',
      error: error
    });
  }
}


const profile =  (req, res, next) =>{
  console.log(req.body)
  res.json(req.body)
}

module.exports = {
  getApi,
  postApi,
  profile
};
//floeza 9068Zair
