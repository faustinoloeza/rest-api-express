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

const isEmailValid = async(email = '') => {
    const isValidMail = await User.findOne({ mail: email });
    if (isValidMail) {
     throw new Error('Mail is duplicated');
    }
    return true;
}
const isValidRole = async(role = '') => {
  const isValidRole = await Role.findOne({ role: role });
  if (!isValidRole) {
   throw new Error('Role is incorrect');
  }
  return true;
}

module.exports = {
    validations,
    isEmailValid,
    isValidRole
}