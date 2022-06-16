const { Router } = require('express');
const bodyParser = require("body-parser");
const router = Router();
const jsonParser = bodyParser.json();
const { getApi, postApi, profile, putApi, getUsers} = require('../controllers/api.controller');
const {validateFields, verifyUserParams, verifyUserParamsPut, verifGetParams} = require('../middleware/validateFields');


router.get('/:id', getApi);
router.get('/', getUsers, verifGetParams(), validateFields);
router.post('/',jsonParser, verifyUserParams(), validateFields, postApi);
router.put('/:id',jsonParser, verifyUserParamsPut(), validateFields, putApi);

module.exports = router;


