import { DataTypes, QueryInterface } from 'sequelize';

export const up = async ({ context: queryInterface }: { context: QueryInterface }) => {
  await queryInterface.addColumn('products', 'event_type', {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, 
  });
};

export const down = async ({ context: queryInterface }: { context: QueryInterface }) => {
  await queryInterface.removeColumn('products', 'event_type');
};
