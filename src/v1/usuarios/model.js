import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import { Endereco } from '../enderecos/model';
import { Perfil } from '../perfis/model';

const Model = Sequelize.Model;

export class Usuario extends Model {}

Usuario.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING(60),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  },
  sobrenome: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  },
  email: {
    type: Sequelize.STRING(40),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isEmail: { msg: 'Informe um email válido!' }
    },
  },
  usuario: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  },
  senha: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
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
  cpf: {
    type: Sequelize.STRING(11),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      notContains: ['.', '-']
    }
  },
  ativo: {
    type: Sequelize.TINYINT,
    allowNull: false,
  },
  enderecosid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Endereco,
      key: 'id'
    }
  },
  perfisid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Perfil,
      key: 'id'
    }
  }
  
}, { sequelize, modelName: 'usuarios', freezeTableName: true});

Usuario.hasOne(Endereco, { sourceKey: 'enderecosid', foreignKey: 'id' });
Usuario.hasOne(Perfil, { sourceKey: 'perfisid', foreignKey: 'id' });