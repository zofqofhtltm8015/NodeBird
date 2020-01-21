module.exports = (sequelize, DataTypes) =>
{
    const Post = sequelize.define('Post',
    {
        content:
        {
            type: DataTypes.TEXT, // (매우 긴 글)
            allowNull: false,
        }
    },{
        CHARSET: 'utf8mb4', // 한글+이모티콘
        collate: 'utf8mb4_general_ci', // 한글을 저장 시키기 위해 사용.
    });

    Post.associate = (db) =>
    {
            db.Post.belongsTo(db.User);
            db.User.hasmany(db.Image);
            db.User.hasmany(db.Comment);
            db.Post.belongsTo(db.Post,{as: 'Retweet'});
            db.Post.belongsToMany(db.Hashtag,{through: 'PostHashtag'});
            db.Post.belongsToMany(db.User,{through: 'Like', as:'Likers'});


    };
    return Post;
}