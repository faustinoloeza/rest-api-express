const { check, validationResult } = require('express-validator');
const {isEmailValid, isValidRole} = require('../db/user.validations');
const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
}
let verifGetParams = () => {
    return [
        check('limit', 'debe ser un correo').isEmail(),
        check('skip', 'No debe estar vacio').isInt(),
    ];

}
let verifyUserParams = () => {
    return [
        check('mail', 'debe ser un correo').isEmail(),
        check('mail').custom(isEmailValid),
        check('role').custom(isValidRole),
        check('name', 'No debe estar vacio').not().isEmpty(),
    ];

}
let verifyUserParamsPut = () => {
    return [
        check('id', 'No es un id valido').isMongoId(),
        check('mail', 'debe ser un correo').isEmail(),
        check('mail').custom(isEmailValid),
        check('role').custom(isValidRole),
        check('name', 'No debe estar vacio').not().isEmpty(),
    ];

}



module.exports = {
    validateFields,
    verifyUserParams,
    verifyUserParamsPut,
    verifGetParams
}