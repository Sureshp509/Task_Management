// models/Profile.js

const Profile = sequelize.define('Profile', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

Profile.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(Profile, { foreignKey: 'userId' });
