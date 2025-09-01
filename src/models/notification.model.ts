import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../config/db';

// Define the attributes interface for the Notification model
interface NotificationAttributes {
  id: number;
  event_type: string;
  message: string;
  is_read: boolean;
  redirection_number?: number | null; 
}


interface NotificationCreationAttributes extends Optional<NotificationAttributes, 'id' | 'is_read' | 'redirection_number'> {}

class NotificationModel extends Model<NotificationAttributes, NotificationCreationAttributes> implements NotificationAttributes {
  public id!: number;
  public event_type!: string;
  public message!: string;
  public is_read!: boolean;
  public redirection_number?: number | null;

  // timestamps will be automatically managed by Sequelize
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the model with its schema and options
NotificationModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    event_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    redirection_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    tableName: 'notifications',
    timestamps: true,  // enable timestamps
  }
);

export default NotificationModel;
