const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class PostMessage extends Model {}

PostMessage.init({
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    message_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "post_message"
});


module.exports =  PostMessage;



