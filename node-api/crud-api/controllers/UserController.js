// import model 
const UserModel = require('../models/User.js')

// create user record
exports.create = async(req, res) => {
	if(!req.body.name && !req.body.email && !req.body.phone) {
		res.status(400).send({
			message : 'Content can not be empty !'
		})
	}  

	const user = new UserModel({
		name:req.body.name, 
		email:req.body.email,
		phone:req.body.phone
	})

	await user.save().then( data => {
		res.send({
			'message' : 'Registration successfully !', 
			'user': data
		})
	}).catch( err => {

		res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
	})
}


// Retrive all user data 
exports.findAll = async(req, res) => {
	try {
		const user = await UserModel.find()
		res.status(200).json(user)
	} catch(error) {
		res.send(404).json({
			message : error.message || "Data not found !"
		})
	}
}

// Retrive single data

exports.findOne = async(req, res) => {
	try {
		const user = await UserModel.findById(req.params.id)
		if(!user) {
			res.status(404).send({
				message : 'User not found'
			})
		} else {
			res.status(200).json(user)
		}
	} catch (error) {
		res.status(404).json({
			message : error.message
		})
	}
}

// Update user by id 
// Update a user by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            // message: err.message || "Hello"
            message:'Inside catch'
        });
    });
};



// Delete user by id 
exports.destroy = async (req, res) => {
	await UserModel.findByIdAndRemove(req.params.id).then(data => {
		if(!data) {
			res.status(404).send({
				message:'User not found'
			})
		} else {
			res.status(200).send({
				message:'User deleted successfully'
			})
		}
	}).catch(err => {
		res.status(500).send({
			message:err.message
		})
	})
}

















