'use strict';

/** @type {import('sequelize-cli').Migration} */
const fields = [
  {
    email:"maito4me@gmail.com",
    firstName:"Sulaimon",                           
    lastName:"Rasheed",
    user_id:"96ee1350-099f-4f33-9cfa-cdae4481d8da",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("admins",fields)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete("admins", {
      email:"maito4me@gmail.com"
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
