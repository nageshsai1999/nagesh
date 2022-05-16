const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors");


// create express app
const app = express();
app.use(cors())


// setup the server port

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())

app.get('/' , (req,res)=>{
    res.send("Hello world")
})

// import user routes

const userRoute = require('./src/routes/user.route');

const itemRoute = require('./user-manu/routes/manu.route')

// create user route

app.use('/api/v1/user' ,userRoute );
app.use('/api/v1/item' ,itemRoute )

app.listen(port , ()=>{
    console.log(`express is running  at port ${port}`)
})