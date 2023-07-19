const { Message } = require("../models"); 
  
const messageController = {
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

module.exports = messageController;