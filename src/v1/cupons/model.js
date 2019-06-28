import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import { UnidadeMedida } from '../unidadeMedidas/model';

const Model = Sequelize.Model;

export class Cupom extends Model {}

Cupom.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  dt_cadastro: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: new Date()
  },
  dt_validade: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  valor: {
    type: Sequelize.DECIMAL(6, 2),
    allowNull: false
  }
  
}, { sequelize, modelName: 'cupons', freezeTableName: true});
