const { User } = require('../models');

const userData = [
  {
    username: 'Snoochie',
    password: 'test1'
  },
  {
    username: 'Mrmmods',
    password: 'test2'
  },
  {
    username: 'POEADDICT',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;