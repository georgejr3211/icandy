import Sequelize from 'sequelize';

import sequelize from '../../config/connection';

const Model = Sequelize.Model;

export class Preco extends Model {}

Preco.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  createdAt: {
    field: 'dt_inicio',
    type: Sequelize.DATE,
  },
  updatedAt: {
    field: 'dt_fim',
    type: Sequelize.DATE,
  },
  preco: {
    type: Sequelize.DECIMAL(6, 2),
    allowNull: false
  }
  
}, { sequelize, modelName: 'precos', freezeTableName: true, createdAt: true, updatedAt: true});