import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const NotificationModel = sequelize.define('Notification', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  event_type: {
    type: DataTypes.INTEGER, // Store event type as number
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_read: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  redirection_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'notifications', 
  timestamps: true,            
});
