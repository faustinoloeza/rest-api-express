const { response, request } = require('express');

const getApi = (req, res = response) => {
  const {id} = req.params;
  res.json({
    mensaje: 'Hola mundo from controller',
    id: id
  });
};

const postApi = (req = request, res = response) => {
  console.log(req.body)
  res.json(req.body)
};


const profile =  (req, res, next) =>{
  console.log(req.body)
  res.json(req.body)
}

module.exports = {
  getApi,
  postApi,
  profile
};
