import Sequelize from 'sequelize';

import sequelize from '../../config/connection';

const Model = Sequelize.Model;

export class UnidadeMedida extends Model {}

UnidadeMedida.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  }
  
}, { sequelize, modelName: 'unidade_medidas', freezeTableName: true});