const express = require('express');
const route = express.Router();


const UserController = require('../controllers/user.controller');

// get all users;
route.get('/', UserController.getUserList);

// get user by id 

route.get('/:id', UserController.getUserById);

// create user 

route.post('/', UserController.createUser);

// update user 

route.put('/:id', UserController.updateUser);

// delete user 

route.delete('/:id' , UserController.deleteUser)

module.exports = route;