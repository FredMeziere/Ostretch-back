const express = require('express');

// on importe nos controllers
const postController = require('../controllers/forumController');
const userMiddleware = require('../middleware/userMiddleware');

const router = express.Router();

// récupération des stretch
router.get('/',  postController.getAllPosts);
router.get('/:id',  postController.getOnePost);

router.post("/",  userMiddleware.isUserLogged, userMiddleware.isAdmin, postController.createPost);
router.patch("/:id", userMiddleware.isUserLogged, userMiddleware.isAdmin, postController.updatePost)
router.delete("/:id", userMiddleware.isUserLogged, userMiddleware.isAdmin, postController.deletePost);

// on exporte le router 
module.exports = router;
