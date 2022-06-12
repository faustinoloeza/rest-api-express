const { Router } = require('express');
const bodyParser = require("body-parser");
const router = Router();
const jsonParser = bodyParser.json();
const { getApi, postApi, profile } = require('../controllers/api.controller');
const {validateFields, verifyUserParams} = require('../middleware/validateFields');


router.get('/:id', getApi);
router.post('/',jsonParser, verifyUserParams(), validateFields, postApi);

module.exports = router;


