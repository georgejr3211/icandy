import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import { Usuario } from '../usuarios/model';

const Model = Sequelize.Model;

export class TelefoneUsuario extends Model {}

TelefoneUsuario.init({
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
  usuariosid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id'
    }
  }
}, { sequelize, modelName: 'telefones_usuario', freezeTableName: true});

TelefoneUsuario.hasOne(Usuario, { sourceKey: 'usuariosid', foreignKey: 'id' });