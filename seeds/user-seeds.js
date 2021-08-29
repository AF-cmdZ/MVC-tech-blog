const { User } = require("../models");

const userData = [
    {
      "username": "Saul",
      "email": "saulgoodman@hotmail.com",
      "password": "password12345"
    },
    {
      "username": "Sophia",
      "email": "sophia@gmail.com",
      "password": "password12345"
    },
    {
      "username": "Rose",
      "email": "rose@aol.com",
      "password": "password12345"
    },
    {
      "username": "Blanche",
      "email": "blanche@aol.com",
      "password": "password12345"
    },
    {
      "username": "Dorothy",
      "email": "dottie@aol.com",
      "password": "password12345"
    }
  ];
  
  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;