const { Post } = require("../models");

const postController = {
/* 
----------------------------------------------
            Gestion des posts
----------------------------------------------
*/ 
    async getAllPosts(req, res) {
        // Récuprération de tous les posts
        try {
            const posts = await Post.findAll();

            const filtredPosts = posts.map(post => {
                return {
                    id : post.id,
                    title: post.title,
                    description_content: post.description_content,
                    categories_post_id: post.category_post_id
                };
            });
            res.status(200).json(filtredPosts);

        } catch (error) {
            
            return res.status(500).json({ error: "findAll" });
        }
    },

    async getOnePost(req, res) {
        
        try {
            const postId = req.params.id;
            const post = await Post.findByPk(postId);
            res.status(200).json(post);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "OnePost" });
        }
    },

    async createPost(req, res) {
        
        try {
            const {
                title,
                description_content,
                category_post_id,
            } = req.body;

            const newPost = await Post.create({
                title,
                description_content,
                category_post_id
            });

            res.status(201).json({
                post: {
                    id: newPost.id,
                    title: newPost.title,
                    description_content: newPost.description_content,
                    category_post_id: newPost.category_post_id
                },
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "create post" });
        }
    },

    async updatePost(req, res) {

        const { title, description_content, category_post_id } = req.body;

        // Si aucun champs n'est modifié,
        if (!title && !description_content && !category_post_id) {
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

        if (category_post_id !== undefined) { // Si il y a une nouveau pseudo
            postToUpdate.category_post_id = category_post_id;
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
}

module.exports = postController;