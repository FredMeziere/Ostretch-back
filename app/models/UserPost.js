const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class UserPost extends Model {}

UserPost.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "user_post"
});


module.exports = UserPost;


