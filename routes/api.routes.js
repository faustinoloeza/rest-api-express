const { Router } = require('express');
const bodyParser = require("body-parser");
const router = Router();
const jsonParser = bodyParser.json();
const { getApi, postApi, profile } = require('../controllers/api.controller');

router.get('/:id', getApi);
router.post('/',jsonParser, postApi);

module.exports = router;


