const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class PostCategory extends Model {}

PostCategory.init({
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "post_category"
});


module.exports = PostCategory;