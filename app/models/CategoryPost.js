const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./sequelize-client');

class CategoryPost extends Sequelize.Model {}


CategoryPost.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'category_post',
    }
);

module.exports = CategoryPost;
