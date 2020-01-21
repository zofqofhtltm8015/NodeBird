module.exports = (sequelize, DataTypes) =>
{
    const image = sequelize.define('image',
    {
        src:
        {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    },{
        CHARSET: 'utf8', // 한글+이모티콘
        collate: 'utf8_general_ci', // 한글을 저장 시키기 위해 사용.
    });

    image.associate = (db) =>
    {
            db.Post.belongsTo(db.Post);


    };
    return image;
}