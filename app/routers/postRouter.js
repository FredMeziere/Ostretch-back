const express = require('express');

// on importe nos controllers
const postController = require('../controllers/postController');
const userMiddleware = require('../middleware/userMiddleware');
const messageController = require('../controllers/messageController');

const router = express.Router();

// récupération des Posts
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getOnePost);

router.post('/', userMiddleware.isAdmin, userMiddleware.isUserLogged, postController.createPost);
router.patch('/:id', userMiddleware.isAdmin, userMiddleware.isUserLogged, postController.updatePost);
router.delete('/:id', userMiddleware.isAdmin, userMiddleware.isUserLogged, postController.deletePost);

// Routes pour les Messages
router.get('/posts/:postId/messages', messageController.getAllMessages);
router.get('/posts/:postId/messages/:id', messageController.getOneMessage);
router.post('/posts/:postId/messages', userMiddleware.isUserLogged, messageController.createMessage);
router.patch('/posts/:postId/messages/:id', userMiddleware.isUserLogged, messageController.updateMessage);
router.delete('/posts/:postId/messages/:id', userMiddleware.isUserLogged, messageController.deleteMessage);

// on exporte le router 
module.exports = router;
