const User = require('../db/user.model');
const Role = require('../db/role.model');

let validations = async(res, req, next, myUser) => {

    const isValidRole = await Role.findOne({ role: myUser.role });
    const isValidMail = await User.findOne({ mail: myUser.mail });
    if (isValidMail) {
      return res.status(400).json({"error": "Mail is duplicated"});
    }
    console.table(isValidRole);
    if (!isValidRole) {
      return res.status(400).json({"error": "Role is not valid"});
    }

}

module.exports = {
    validations
}