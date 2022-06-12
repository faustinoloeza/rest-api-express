const { check, validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
}

let verifyUserParams = () => {
    return [
        check('mail', 'debe ser un correo').isEmail(),
        check('name', 'No debe estar vacio').not().isEmpty(),
    ];

}


module.exports = {
    validateFields,
    verifyUserParams
}