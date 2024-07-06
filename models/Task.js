const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Task = sequelize.define('Task', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    dueDate: { type: DataTypes.DATE },
    status: { type: DataTypes.ENUM('pending', 'in-progress', 'completed'), defaultValue: 'pending' },
    category: { type: DataTypes.STRING }
});

Task.belongsTo(User, { as: 'assignedTo' });

module.exports = Task;
