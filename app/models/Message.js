const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class Message extends Model { }

Message.init({
    text_content: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    tableName: "message"
});


module.exports = Message;


