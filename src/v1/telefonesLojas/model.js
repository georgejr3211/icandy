import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import { Loja } from '../lojas/model';

const Model = Sequelize.Model;

export class TelefoneLoja extends Model {}

TelefoneLoja.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ddd: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fone: {
    type: Sequelize.STRING(15),
    allowNull: false,
    validate: {
      len: {
        msg: 'Deve haver 15 caracteres',
        args: [1, 15]
      }
    }
  },
  lojasid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Loja,
      key: 'id'
    }
  }
}, { sequelize, modelName: 'telefones_loja', freezeTableName: true});

TelefoneLoja.hasOne(Loja, { sourceKey: 'lojasid', foreignKey: 'id' });