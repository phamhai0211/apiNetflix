const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./route/auth')
const userRoute = require("./route/users");
const movieRoute = require("./route/movies");
const listRoute = require("./route/lists");
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });
app.use(express.json())
app.use('/api/auth',authRoute)
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800,()=>{
    console.log('backend running')
})
