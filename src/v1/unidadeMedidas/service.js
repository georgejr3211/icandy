import { UnidadeMedida } from './model';

export async function getAllItems(params) {
  const resources = await UnidadeMedida.findAndCountAll({
      order: [['id', 'DESC']],
      limit: params.limit,
      offset: params.page
    });

  return resources;
}

export async function getOneItem(id) {
  const resources = await UnidadeMedida.findByPk(id);

  return resources;
}

export async function createItem(data) {
  const resources = await UnidadeMedida.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await UnidadeMedida.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await UnidadeMedida.destroy({ where: { id } })

  return resources;
}