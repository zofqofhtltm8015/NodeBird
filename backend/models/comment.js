module.exports = (sequelize, DataTypes) =>
{
    const Comment = sequelize.define('comment',
    {
        content:
        {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },{
        CHARSET: 'utf8mb4', // 한글+이모티콘
        collate: 'utf8mb4_general_ci', // 한글을 저장 시키기 위해 사용.
    });

    Comment.associate = (db) =>
    {
            db.Post.belongsTo(db.Post);
            db.Post.belongsTo(db.User);


    };
    return Comment;
}