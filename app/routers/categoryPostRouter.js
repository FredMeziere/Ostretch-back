const express = require('express');

// on importe nos controllers
const categoryPostController = require('../controllers/categoryPostController');

const router = express.Router();

// récupération des catégories
router.get('/', categoryPostController.getAllCategories);

// on exporte le router 
module.exports = router;
