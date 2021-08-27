const { User } = require("../models");

const userData = [
    {
      "name": "Sal",
      "email": "salgoodman@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Sophia",
      "email": "sophia@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Rose",
      "email": "rose@aol.com",
      "password": "password12345"
    },
    {
      "name": "Blanche",
      "email": "blanche@aol.com",
      "password": "password12345"
    },
    {
      "name": "Dorothy",
      "email": "dottie@aol.com",
      "password": "password12345"
    }
  ];
  
  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;