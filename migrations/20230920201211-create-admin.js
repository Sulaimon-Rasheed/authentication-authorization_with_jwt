'use strict';
const { v4: uuidv4 } = require('uuid');
uuidv4();
/** @type {import('sequelize-cli').Migration} */


module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('Admins', {
        _id: {
        unique:true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:uuidv4()
      },
      email:{
        type:Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      firstName: {                 
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },                                       
      user_id: {
        type: Sequelize.UUID,
        references:{
          model:"users",
          key:"_id"
        }
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
    await queryInterface.dropTable('Admins');
  }
};