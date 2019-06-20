"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TelefoneUsuario = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

var _model = require("../usuarios/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class TelefoneUsuario extends Model {}

exports.TelefoneUsuario = TelefoneUsuario;
TelefoneUsuario.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ddd: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  fone: {
    type: _sequelize.default.STRING(15),
    allowNull: false,
    validate: {
      len: {
        msg: 'Deve haver 15 caracteres',
        args: [1, 15]
      }
    }
  },
  usuariosid: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    references: {
      model: _model.Usuario,
      key: 'id'
    }
  }
}, {
  sequelize: _connection.default,
  modelName: 'telefones_usuario',
  freezeTableName: true
});
TelefoneUsuario.hasOne(_model.Usuario, {
  sourceKey: 'usuariosid',
  foreignKey: 'id'
});