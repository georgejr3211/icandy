import Sequelize from 'sequelize';
import sequelize from  '../../config/connection';
const Model = Sequelize.Model;

export class FormaPagamento extends Model {}

FormaPagamento.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      len: {
        msg: '3 a 30 caracteres!',
        args: [3, 30]
      }
    }
  },
  ativo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  }
}, { sequelize, modelName: 'formas_pagamento', freezeTableName: true });