const mongoose = require('mongoose')

const connectionDB = (DATABASE_URL) => {
	mongoose.connect(DATABASE_URL).then( ()=> {
		console.log('Database connection successfully !!')
	}).catch( (err)=> {
		console.log(err.message)
	})
}


module.exports = connectionDB