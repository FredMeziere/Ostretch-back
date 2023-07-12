const { Post } = require("../models");

const forumController = {

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
                main_image,
                category_id
            } =req.body;

            const newPost = await Post.create({
                title,
                description_content,
                main_image,
                category_id,
            });

            res.status(201).json({
                stretch: {
                    id: newPost.id,
                    title: newPost.title,
                    description_content: newPost.description_content,
                    main_image: newPost.main_image,
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
                return res.status(404).json({ error: "Stretch not found" });
            }
            await post.destroy();
            res.status(204).end();
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
}

module.exports = forumController;