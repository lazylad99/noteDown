const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/noteDown', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


//     const newUser = new User({
//       name: "alok",
//       email: "somethin@mail.com",
//       password: "afhal"
//   })
  
//   newUser.insertOne()
//     .then(newUser => {
//         console.log(newUser)
//     })
//     .catch(e => {
//         console.log(e)
//     })