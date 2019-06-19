import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import { Preco } from '../precos/model';
import { Loja } from '../lojas/model';

const Model = Sequelize.Model;

export class Produto extends Model {}

Produto.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  foto: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  peso: {
    type: Sequelize.DECIMAL(6, 3),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  },
  unidade_medidasid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ativo: {
    type: Sequelize.TINYINT,
    allowNull: false,
  },
  precosid: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  lojasid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
  
}, { sequelize, modelName: 'produtos', freezeTableName: true});

Produto.hasOne(Preco, { sourceKey: 'precosid', foreignKey: 'id' });
Produto.belongsTo(Loja, { sourceKey: 'lojasid', foreignKey: 'id' });