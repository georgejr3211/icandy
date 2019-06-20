import Sequelize from 'sequelize';

import sequelize from '../../config/connection';

const Model = Sequelize.Model;

export class StatusPedido extends Model {}

StatusPedido.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: Sequelize.STRING(30),
    allowNull: false
  }
  
}, { sequelize, modelName: 'status_pedidos', freezeTableName: true});