const { Router } = require('express');
const bodyParser = require("body-parser");
const router = Router();
const jsonParser = bodyParser.json();
const { getApi, postApi, profile } = require('../controllers/api.controller');
const { verifyUserParams } = require('../helpers/helpers');



router.get('/:id', getApi);
router.post('/',jsonParser, verifyUserParams(), postApi);

module.exports = router;


