import Sequelize from 'sequelize';
import sequelize from  '../../config/connection';
import { Categoria } from '../categorias/model';
import { Produto } from '../produtos/model';
const Model = Sequelize.Model;

export class ProdutoCategoria extends Model {}

ProdutoCategoria.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  produtosid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  categoriasid: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'produtos_categorias' });

ProdutoCategoria.hasOne(Produto, { foreignKey: 'id', sourceKey: 'produtosid' });
ProdutoCategoria.hasOne(Categoria, { foreignKey: 'id', sourceKey: 'categoriasid' });