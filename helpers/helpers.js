const { check} = require('express-validator');

let verifyUserParams = () => {
    return [
        check('mail', 'debe ser un correo').isEmail(),
        check('name', 'No debe estar vacio').not().isEmpty()
    ];
}


module.exports = {
    verifyUserParams,
}