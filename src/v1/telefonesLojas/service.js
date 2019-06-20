import { Loja } from '../lojas/model';
import { TelefoneLoja } from './model';

export async function getAllItems(params) {
  const resources = await TelefoneLoja.findAndCountAll({
    order: [['id', 'DESC']],
    include: [{
      model: Loja,
    }]
  });

  return resources;
}

export async function getOneItem(id) {
  const resources = await TelefoneLoja.findByPk(id, { include: Loja });

  return resources;
}

export async function createItem(data) {
  const resources = await TelefoneLoja.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await TelefoneLoja.findByPk(id)
    .then(res => res.update(data))
    .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await TelefoneLoja.destroy({ where: { id } })

  return resources;
}