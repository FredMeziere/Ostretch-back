const { Post } = require("../models");
const { Message } = require("../models");


const forumController = {
/* 
----------------------------------------------
            Gestion des posts
----------------------------------------------
*/ 
    async getAllPosts(req, res) {
        // Récuprération de tous les posts
        try {
            const posts = await Post.findAll();
            res.status(200).json(posts);
            // Permet de d'indique que le serveur a rencontré un problème inattendu qui l'empêche de répondre à la requête.         
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    
    async getOnePost(req, res) {
        
        try {
            const postId = req.params.id;
            const post = await Post.findByPk(postId);
            res.status(200).json(post);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },

    async createPost(req, res) {
        
        try {
            const {
                title,
                description_content,
                category_id
            } =req.body;

            const newPost = await Post.create({
                title,
                description_content,
                category_id
            });

            res.status(201).json({
                post: {
                    id: newPost.id,
                    title: newPost.title,
                    description_content: newPost.description_content,
                    category_id: newPost.category_id
                },
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },

    async updatePost(req, res) {

        const { title, description_content, main_image, category_id } = req.body;

        // Si aucun champs n'est modifié,
        if (!title && !description_content && !main_image  && !category_id) {
            return res.status(400).json({ error: "Invalid body. Should provide at least a 'title', 'description_content', 'main_image', 'description_image' or 'category_id' property" });
        }

        const postId = req.params.id;
        //trouver le post correspondant à l'id
        const postToUpdate = await Post.findByPk(postId);

        if (title !== undefined) { // Si il y a un nouveau mail
            postToUpdate.title = title;
        }

        if (description_content !== undefined) { // Si il y a une nouveau pseudo
            postToUpdate.description_content = description_content;
        }

        if (main_image !== undefined) { // Si il y a une nouveau pseudo
            postToUpdate.main_image = main_image;
        }

        if (category_id !== undefined) { // Si il y a une nouveau pseudo
            postToUpdate.category_id = category_id;
        }

        await postToUpdate.save();

        // Réponse
        res.status(204).end();
    },


    // suppression du post avec l'identifiant spécifié
    async deletePost(req, res) {

        try {
            const postId = req.params.id;
            const post = await Post.findByPk(postId);
            if (!post) {
                return res.status(404).json({ error: "Post non trouvé" });
            }
            await post.destroy();
            res.status(204).end();
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    /* 
----------------------------------------------
            Gestion des messages
----------------------------------------------
*/ 
    async getAllMessages(req, res) {
    // Récuprération de tous les posts
        try {
            const messages = await Message.findAll();
            res.status(200).json(messages);
        // Permet de d'indique qu le serveur a rencontré un problème inattendu qui l'empêche de répondre à la requête.         
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    async getOneMessage(req, res) {
    
        try {
            const messageId = req.params.id;
            const message = await Message.findByPk(messageId);
            res.status(200).json(message);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    async createMessage(req, res) {
    
        try {
            const {
                text_content
            } =req.body;

            const newMessage = await Message.create({
                text_content
            });

            res.status(201).json({
                message: {
                    id: newMessage.id,
                    text_content: newMessage.text_content
                },
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },

    async updateMessage(req, res) {

        const { text_content } = req.body;

        // Si aucun champs n'est modifié,
        if (!text_content) {
            return res.status(400).json({ error: "Invalid body. Should provide at least a 'title', 'description_content', 'main_image', 'description_image' or 'category_id' property" });
        }

        const messageId = req.params.id;
        //trouver le post correspondant à l'id
        const messageToUpdate = await Message.findByPk(messageId);

        if (text_content !== undefined) { // Si il y a un nouveau mail
            messageToUpdate.title = text_content;
        }

        await messageToUpdate.save();

        // Réponse
        res.status(204).end();
    },


    // suppression du post avec l'identifiant spécifié
    async deleteMessage(req, res) {

        try {
            const messageId = req.params.id;
            const message = await Message.findByPk(messageId);
            if (!message) {
                return res.status(404).json({ error: "Message non trouvé" });
            }
            await message.destroy();
            res.status(204).end();
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Erreur serveur interne" });
        }
    },


}




module.exports = forumController;