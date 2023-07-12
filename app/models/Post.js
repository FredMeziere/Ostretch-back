const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class Post extends Model { }

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    main_image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description_content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_post_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    tableName: "post"
});


module.exports = Post;


