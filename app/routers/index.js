// Imports generaux
const { Router } = require("express");

// Imports des differents routeurs
const stretchRouter = require("./stretchRouter");
const userRouter = require("./userRouter");
const favoriteRouter = require("./favoriteRouter");
const contactRouter = require("./contactRouter");
const categoryRouter = require("./categoryRouter");
const postRouter = require("./forumRouter")

// Création du router principal
const router = Router();


// On branches les sous routeurs
router.use("/stretches", stretchRouter);
router.use("/categories", categoryRouter);
router.use("/", userRouter);
router.use("/user/me/stretches", favoriteRouter);
router.use("/", contactRouter);
router.use("/Forum", postRouter)


// On exporte le routeur principal
module.exports = router;
