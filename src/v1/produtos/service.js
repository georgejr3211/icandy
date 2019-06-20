import { Loja } from '../lojas/model';
import { Preco } from '../precos/model';
import { Produto } from './model';

export async function getAllItems(params) {
  const resources = await Produto.findAndCountAll({
    order: [['id', 'DESC']],
    include: [Preco, Loja],
    limit: params.limit,
    offset: params.page
  });

  return resources;
}

export async function getOneItem(id) {
  const resources = await Produto.findByPk(id, {
    include: [{
      model: Loja,
    },{
      model: Preco,
    }]
  });

  return resources;
}

export async function createItem(data) {
  const resources = await Produto.create(data, { include: Preco });

  return resources;
}

export async function updateItem(id, data) {
  const resources = await Produto.findByPk(id)
    .then(res => res.update(data))
    .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await Produto.update({ativo: false}, { where: { id } })

  return resources;
}