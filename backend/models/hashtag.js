module.exports = (sequelize, DataTypes) =>
{
    const hashtag = sequelize.define('hashtag',
    {
        content:
        {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    },{
        CHARSET: 'utf8mb4', // 한글+이모티콘
        collate: 'utf8mb4_general_ci', // 한글을 저장 시키기 위해 사용.
    });

    hashtag.associate = (db) =>
    {
            db.Post.belongsToMany(db.Post,{through: 'PostHashTag'});
      


    };
    return hashtag;
}