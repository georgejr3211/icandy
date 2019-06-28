import Sequelize from 'sequelize';

import sequelize from '../../config/connection';

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
// sourceKey: 'precosid', foreignKey: 'id'
// ProdutoCategoria.belongsTo(Produto,  {targetKey: 'produtosid', foreignKey: 'id' } );

// Produto.belongsToMany(Categoria, {
//   through: ProdutoCategoria,
//   foreignKey: 'produtosid',
//   otherKey: 'id'
// });

// Categoria.belongsToMany(Produto, {
//   through: ProdutoCategoria,
//   foreignKey: 'categoriasid',
//   otherKey: 'id'
// });

// export const Prod = Produto;
// export const Cat = Categoria;