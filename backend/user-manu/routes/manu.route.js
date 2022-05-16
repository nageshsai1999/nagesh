const express = require('express');
const route = express.Router();

const ItemController = require('../controller/manu.controller');

// get all items;
route.get('/', ItemController.getItemList);

// get user by id 
route.get('/:id', ItemController.getItemById);

// delete item 
route.delete('/:id', ItemController.deleteItem);

module.exports = route;