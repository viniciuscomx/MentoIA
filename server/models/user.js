const db = require('../config/database');

const createUser = (user) => db('users').insert(user);
const findUserByEmail = (email) => db('users').where({ email }).first();

module.exports = {
  createUser,
  findUserByEmail,
};
