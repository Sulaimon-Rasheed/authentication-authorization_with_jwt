const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../config/sequelize")
const { v4: uuidv4 } = require('uuid');
const User = require("./user")

const Admin = sequelize.define("Admin", {
          _id:{
          type: DataTypes.UUID,
          defaultValue:uuidv4(),
          unique: true,
          primaryKey: true
        },
        email:{
          type:DataTypes.STRING,
          allowNull: false,
          unique:true
        }, 
        firstName:{
          type:DataTypes.STRING,
          allowNull: false,
        }, 
        lastName:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.UUID,
          references:{
            model:"User",
            key:"_id"
          },
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
    modelName: 'Admin',
 }
 )

 Admin.belongsTo(User, { foreignKey: 'user_id' });

 module.exports = Admin
