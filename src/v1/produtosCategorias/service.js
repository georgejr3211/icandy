import { Categoria } from '../categorias/model';
import { Produto } from '../produtos/model';
import { ProdutoCategoria } from './model';

export async function getAllItems(params) {
  const resources = await ProdutoCategoria.findAll({
      order: [['id', 'DESC']],
      include: [Produto, Categoria],
      limit: params.limit,
      offset: params.page
    });

  return resources;
}

export async function getOneItem(id) {
  const resources = await ProdutoCategoria.findByPk(id, {
      include: [Produto, Categoria]
    });

  return resources;
}

export async function createItem(data) {
  const resources = ProdutoCategoria.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await ProdutoCategoria.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await ProdutoCategoria.destroy({ where: { id } })

  return resources;
}