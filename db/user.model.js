const {Schema, model} = require('mongoose');


const User = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  mail: {
    type: String,
    required: [true, 'mail is required'],
    unique: true,
  },
  password:{
    type: String,
    required: [true, 'password is required']
  },
  image: {
    type: String,
  },
  role:{
    type: String,
    required: [true, 'role is required'],
    enum: ['ADMIN', 'USER'],
  },
  state:{
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  },
    createdAt: {
    type: Date,
    default: Date.now()
    },
});

module.exports = model('User', User);