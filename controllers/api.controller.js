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
    const  {...myuser } = req.body;

    const user = new User(myuser);
    console.log(user);
    const hash = bcrypt.hashSync(myuser.password, saltRounds);
    user.password = hash;

    console.log(user);
    await user.save();

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

const putApi = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const { _id, password, google, ...parametros } = req.body;
    const userU = await User.findByIdAndUpdate(id, parametros);

    res.json({
      message: 'User updated',
      user: userU,
  });
  } catch (error) {
    res.json({
      message: 'Error',
      error: error
    });
  }
}
const getUsers = async (req = request, res = response) => {
  let {limit, skip} = req.query;
  try {
    const userU = await User.find().skip(skip).limit(limit);
    const total = await User.countDocuments();
    res.json({
      message: 'User get',
      users: userU,
      total: total

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
  profile,
  putApi,
  getUsers
};
//floeza 9068Zair
