import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

// This function runs when applying the migration
export const up = async ({ context: queryInterface }: { context: QueryInterface }) => {
  await queryInterface.createTable('products', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

   
    event_type: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },

    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
  });
};


export const down = async ({ context: queryInterface }: { context: QueryInterface }) => {
  await queryInterface.dropTable('products');
};
