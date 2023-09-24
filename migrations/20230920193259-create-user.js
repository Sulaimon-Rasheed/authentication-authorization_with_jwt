'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
        _id: {
        unique:true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:uuidv4()
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      phone_number:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      gender:{
        type:Sequelize.ENUM,
        values:["male", "female"],
        defaultValue:"male"
      },
      address:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      city:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      state:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      country:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};