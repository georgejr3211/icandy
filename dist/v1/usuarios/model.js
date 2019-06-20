"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Usuario = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

var _model = require("../enderecos/model");

var _model2 = require("../perfis/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class Usuario extends Model {}

exports.Usuario = Usuario;
Usuario.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: _sequelize.default.STRING(60),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  sobrenome: {
    type: _sequelize.default.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  email: {
    type: _sequelize.default.STRING(40),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isEmail: {
        msg: 'Informe um email válido!'
      }
    }
  },
  usuario: {
    type: _sequelize.default.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  senha: {
    type: _sequelize.default.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  dt_cadastro: {
    type: _sequelize.default.DATE,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isDate: true
    }
  },
  cpf: {
    type: _sequelize.default.STRING(11),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      notContains: ['.', '-']
    }
  },
  ativo: {
    type: _sequelize.default.TINYINT,
    allowNull: false
  },
  enderecosid: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    references: {
      model: _model.Endereco,
      key: 'id'
    }
  },
  perfisid: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    references: {
      model: _model2.Perfil,
      key: 'id'
    }
  }
}, {
  sequelize: _connection.default,
  modelName: 'usuarios',
  freezeTableName: true
});
Usuario.hasOne(_model.Endereco, {
  sourceKey: 'enderecosid',
  foreignKey: 'id'
});
Usuario.hasOne(_model2.Perfil, {
  sourceKey: 'perfisid',
  foreignKey: 'id'
});