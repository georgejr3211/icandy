import { Cupom } from '../cupons/model';
import { FormaPagamento } from '../formasPagamentos/model';
import { StatusPedido } from '../statusPedidos/model';
import { Usuario } from '../usuarios/model';
import { Pedido } from './model';

export async function getAllItems(params) {
  const resources = await Pedido.findAll({
      order: [['id', 'DESC']],
      include: [{model: FormaPagamento}, {model: StatusPedido}, {model: Cupom, as: 'cupom'}, {model: Usuario}],
      limit: params.limit,
      offset: params.page
    });

  return resources;
}

export async function getOneItem(id) {
  const resources = await Pedido.findByPk(id, {
      include: [{model: FormaPagamento}, {model: StatusPedido}, {model: Cupom, as: 'cupom'}, {model: Usuario}]
    });

  return resources;
}

export async function createItem(data) {
  const resources = Pedido.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await Pedido.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await Pedido.destroy({ where: { id } })

  return resources;
}