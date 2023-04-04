const express = require('express')
const path = require('path');
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect('mongodb://127.0.0.1:27017/noteDown', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(cors())
    app.use(express.json())

    //Available Routes
    app.use('/api/auth', require('./routes/auth'))
    app.use('/api/notes', require('./routes/notes'))

app.listen(5000, () => {
    console.log('Serving on http://localhost:5000/')
});
