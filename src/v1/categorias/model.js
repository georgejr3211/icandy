import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import { Produto } from '../produtos/model';
import { ProdutoCategoria } from '../produtosCategorias/model';

const Model = Sequelize.Model;

export class Categoria extends Model {}

Categoria.init({
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
  foto: {
    type: Sequelize.STRING(150),
    allowNull: true
  },
  ativo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  }
}, { sequelize, modelName: 'categorias' });

Categoria.belongsToMany(Produto, { through: ProdutoCategoria, foreignKey: 'categoriasid', otherKey: 'produtosid' });
