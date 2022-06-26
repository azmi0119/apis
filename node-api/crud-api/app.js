const express = require('express')
const app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());

// import web.js file 
web = require('./routes/web.js')

// import database file 
const connectionDB = require('./config/database.js')
const DATABASE_URL = 'mongodb://localhost:27017/crud-api';

connectionDB(DATABASE_URL)
 
app.use('/', web)

app.listen(8000, ()=>{
	console.log('Server has started !!')
})