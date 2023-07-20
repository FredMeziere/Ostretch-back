const User = require('./User');
const Category = require('./Category');
const Stretch = require('./Stretch');
const Role = require('./Role');
const PostCategory = require('./PostCategory');
const Post = require('./Post')

// Un étirement peut avoir une catégorie
// Une catégorie peut avoir des étirements


Role.hasMany(User, {
    foreignKey: 'role_id',
    as: 'users',
});

User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'role',
});

Category.hasMany(Stretch, {
    foreignKey: 'category_id',
    as: 'stretches',
});

Stretch.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category',
});

PostCategory.hasMany(Post, {
    foreignKey: 'category_post_id',
    as: 'posts',
});

Post.belongsTo(PostCategory, {
    foreignKey: 'category_post_id',
    as: 'category_post',
});

// Association de User à Post
User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'posts',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
});

// Association de User à Stretch
User.belongsToMany(Stretch, {
    through: 'user_stretch',
    foreignKey: 'user_id',
    otherKey: 'stretch_id',
    as: 'stretches',
});

Stretch.belongsToMany(User, {
    through: 'user_stretch',
    foreignKey: 'stretch_id',
    otherKey: 'user_id',
    as: 'users',
});

module.exports = { User, Category, Stretch, Role };
