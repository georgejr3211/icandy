import { Endereco } from '../enderecos/model';
import { Loja } from './model';

export async function getAllItems(params) {
  const resources = await Loja.findAndCountAll({
    order: [['id', 'DESC']],
    // include: [{
    //   model: Endereco,
    // }],
    limit: params.limit,
    offset: params.page
  });

  return resources;
}

export async function getOneItem(id) {
  const resources = await Loja.findByPk(id, { include: Endereco });

  return resources;
}

export async function createItem(data) {
  const resources = await Loja.create(data, { include: Endereco });

  return resources;
}

export async function updateItem(id, data) {
  const resources = await Loja.findByPk(id)
    .then(res => res.update(data))
    .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await Loja.destroy({ where: { id } })

  return resources;
}