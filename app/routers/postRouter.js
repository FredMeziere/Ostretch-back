const express = require('express');

// on importe nos controllers
const forumController = require('../controllers/postController');
const userMiddleware = require('../middleware/userMiddleware');
const messageController = require('../controllers/messageController');

const router = express.Router();

// récupération des Posts
router.get('/posts', forumController.getAllPosts);
router.get('/posts/:id', forumController.getOnePost);
router.post('/posts', userMiddleware.isUserLogged, userMiddleware.isAdmin, forumController.createPost);
router.patch('/posts/:id', userMiddleware.isUserLogged, userMiddleware.isAdmin, forumController.updatePost);
router.delete('/posts/:id', userMiddleware.isUserLogged, userMiddleware.isAdmin, forumController.deletePost);

// Routes pour les Messages
router.get('/posts/:postId/messages', messageController.getAllMessages);
router.get('/posts/:postId/messages/:id', messageController.getOneMessage);
router.post('/posts/:postId/messages', userMiddleware.isUserLogged, messageController.createMessage);
router.patch('/posts/:postId/messages/:id', userMiddleware.isUserLogged, messageController.updateMessage);
router.delete('/posts/:postId/messages/:id', userMiddleware.isUserLogged, messageController.deleteMessage);

// on exporte le router 
module.exports = router;
