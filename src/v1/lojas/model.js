import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import { Endereco } from '../enderecos/model';

const Model = Sequelize.Model;

export class Loja extends Model {}

Loja.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  cnpj: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: {
        msg: 'Deve haver 14 caracteres',
        args: [14, 14]
      }
    }
  },
  enderecosid: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'lojas', freezeTableName: true});

Loja.hasOne(Endereco, { sourceKey: 'enderecosid', foreignKey: 'id' });