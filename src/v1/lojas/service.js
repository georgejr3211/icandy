import { Endereco } from '../enderecos/model';
import { Loja } from './model';

export async function getAllItems(params) {
  try {
    const resources = await Loja.findAndCountAll({
      order: [['id', 'DESC']],
      include: [{
        model: Endereco,
      }]
    });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOneItem(id) {
  try {
    const resources = await Loja.findByPk(id, { include: Endereco });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createItem(data) {
  try {
    const resources = await Loja.create(data);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateItem(id, data) {
  try {
    const resources = await Loja.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteItem(id) {
  try {
    const resources = await Loja.destroy({ where: { id } })

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}