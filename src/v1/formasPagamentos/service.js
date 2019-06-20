import { FormaPagamento } from './model';

export async function getAllItems(params) {
  const resources = await FormaPagamento.findAndCountAll({
      where: { ativo: 1 },
      order: [['id', 'DESC']],
      limit: params.limit,
      offset: params.page
    });

  return resources;
}

export async function getOneItem(id) {
  const resources = await FormaPagamento.findByPk(id);

  return resources;
}

export async function createItem(data) {
  const resources = await FormaPagamento.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await FormaPagamento.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await FormaPagamento.update({ ativo: false }, { where: { id } })

  return resources;
}