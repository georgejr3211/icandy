import Sequelize from 'sequelize';

import sequelize from '../../config/connection';

const Model = Sequelize.Model;

export class Cupon extends Model {}

Cupon.init({
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
  dt_cadastro: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isDate: true
    }
  },
  dt_validade: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isDate: true
    }
  },
  valor: {
    type: Sequelize.DECIMAL(6, 2),
    allowNull: false
  }
  
}, { sequelize, modelName: 'cupons', freezeTableName: true});
Cupon.hasOne(UnidadeMedida, { sourceKey: 'unidade_medidasid', foreignKey: 'id' });
