const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../config/sequelize")
const bcrypt = require("bcrypt")
const { v4: uuidv4 } = require('uuid');

const User = sequelize.define("User", {
          _id:{
          type: DataTypes.UUID,
          defaultValue:uuidv4(),
          unique: true,
          primaryKey: true
        },
        username:{
          type:DataTypes.STRING,
          unique: true,
          allowNull: false,
        }, 
        password:{
          type:DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        email:{
          type:DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        phone_number:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        gender:{
          type:DataTypes.ENUM,
          values:["male", "female"],
        },
        address:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        city:{
          type:DataTypes.STRING,
          allowNull:false,
        },
        state:{
          type:DataTypes.STRING,
          allowNull:false,
        },
        country:{
          type:DataTypes.STRING,
          allowNull:false,
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      },
 {
    timestamps:true,
    sequelize,
    modelName: 'User',
    
  }
 )

 User.beforeCreate((user, option) => {

  return bcrypt.hash(user.password, 10)
      .then(hash => {
          user.password = hash;
      })
      .catch(err => { 
          throw new Error(); 
      });
});

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User

 


//  module.exports = function(sequelize, DataTypes) {
//      const User = sequelize.define('users', {
//       _id:{
//         type: DataTypes.UUID,
//         defaultValue:uuidv4(),
//         unique: true,
//         primaryKey: true
//       },
//       username:{
//         type:DataTypes.STRING,
//         unique: true,
//         allowNull: false,
//       }, 
//       password:{
//         type:DataTypes.STRING,
//         unique: true,
//         allowNull: false,
//       },
//       email:{
//         type:DataTypes.STRING,
//         unique: true,
//         allowNull: false,
//       },
//       phone_number:{
//         type:DataTypes.STRING,
//         allowNull: false,
//       },
//       gender:{
//         type:DataTypes.ENUM,
//         values:["male", "female"],
//       },
//       address:{
//         type:DataTypes.STRING,
//         allowNull: false,
//       },
//       city:{
//         type:DataTypes.STRING,
//         allowNull:false,
//       },
//       state:{
//         type:DataTypes.STRING,
//         allowNull:false,
//       },
//       country:{
//         type:DataTypes.STRING,
//         allowNull:false,
//       },
//       createdAt: {
//         type: DataTypes.DATE
//       },
//       updatedAt: {
//         type: DataTypes.DATE
//       }
//      }, {
//          freezeTableName: true,
         
//      });
 
//      return User;
//  }
 

































// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     username: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };