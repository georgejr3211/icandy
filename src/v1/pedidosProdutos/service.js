import { Pedido } from '../pedidos/model';
import { Produto } from '../produtos/model';
import { PedidoProduto } from './model';

export async function getAllItems(params) {
  const resources = await PedidoProduto.findAll({
    order: [['id', 'DESC']],
    include: [Produto, Pedido],
    limit: params.limit,
    offset: params.page
  });

  return resources;
}

export async function getOneItem(id) {
  const resources = await PedidoProduto.findByPk(id, {
    include: [Produto, Pedido],
  });

  return resources;
}

export async function createItem(data) {
  const resources = PedidoProduto.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await PedidoProduto.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await PedidoProduto.destroy({ where: { id } })

  return resources;
}