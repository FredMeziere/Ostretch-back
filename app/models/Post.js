const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class Post extends Model { }

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description_content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    tableName: "post"
});


module.exports = Post;


