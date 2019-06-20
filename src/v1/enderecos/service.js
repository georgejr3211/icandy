import { Endereco } from './model';

export async function getAllItems(params) {
  const resources = await Endereco.findAndCountAll({
      order: [['id', 'DESC']],
      limit: params.limit,
      offset: params.page
    });

  return resources;
}

export async function getOneItem(id) {
  const resources = await Endereco.findByPk(id);

  return resources;
}

export async function createItem(data) {
  const resources = await Endereco.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await Endereco.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await Endereco.destroy({ where: { id } })

  return resources;
}