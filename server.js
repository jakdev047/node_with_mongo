// require files
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// port 
const PORT = process.env.PORT || 8080;

// connecting MongoDB
const { connectDB } = require('./db/dbConnect');
connectDB();

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// route
const indexRoute = require('./routes');
app.use('/',indexRoute);

// listen
app.listen(PORT,()=>{
    console.log(`${PORT} Server is running...`)
});
