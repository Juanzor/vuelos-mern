import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Vuelo = sequelize.define(
    'Vuelo',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        vuelo: {
            type: DataTypes.STRING,
            unique: true,
        },
        horario: {
            type: DataTypes.STRING,
        },

        linea: {
            type: DataTypes.STRING,
        },
        demorado: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        tableName: 'vuelos',
        timestamps: false,
    }
);
