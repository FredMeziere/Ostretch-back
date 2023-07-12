const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class UserMessage extends Model {}

UserMessage.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    message_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize, 
    tableName: "user_message"
});


module.exports = UserMessage;



