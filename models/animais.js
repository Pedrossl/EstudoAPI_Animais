import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Animais = sequelize.define('Animal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  raca: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER(3),
    allowNull: false,
  },
  custo_mensal: {
    type: DataTypes.REAL,
    allowNull: false
  },
  ambiente: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: 'terrestre'
  }
},{
  tableName: 'Animais'
});