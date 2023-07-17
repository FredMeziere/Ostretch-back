const { CategoryPost } = require("../models");

const categoryPostController = {

    async getAllCategories(req, res) {
        // On récupère la liste des catégories depuis la DB à partir du model Sequelize
        try {
            const categoriespost = await CategoryPost.findAll();
            res.status(200).json(categoriespost);

        // Permet de d'indique que le serveur a rencontré un problème inattendu qui l'empêche de répondre à la requête.         
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
}


module.exports = categoryPostController;
