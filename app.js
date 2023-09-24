const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const sequelize = require("./config/sequelize")
const User = require("./models/user")
const userRoute = require("./users_signup_login/user.route")
const productRoute = require("./products/product.route")
const adminRoute = require("./admins/admin.route")

const PORT = process.env.PORT

const app = express()

app.use(bodyParser.json())
app.use("/users", userRoute)
app.use("/admins", adminRoute)
app.use("/products", productRoute)

app.get("/", (req,res)=>{
  return res.json({
    message:"Welcome"
  })
})


sequelize
  .authenticate()
  .then(() => {
    console.log("database connection is successful");
  })
  .catch((err) => {
    console.log("database connection failed", err);
  });

app.listen(PORT, ()=>{
    console.log(`app has started running at: http://localhost:${PORT}`)
})



















// const {connectToDatabase} = require("./config/mongoose")
// const bodyParser = require('body-parser')
// const Seller = require("./models/seller")
// const userRoute = require("./users/user.route")
