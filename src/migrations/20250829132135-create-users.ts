import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

export const up = async ({ context: qi }: { context: QueryInterface }) => {
    await qi.createTable('users', {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING(120),
            allowNull: false
        },

        event_type: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        }
    });
};

export const down = async ({ context: qi }: { context: QueryInterface }) => {
    await qi.dropTable('users');
};
