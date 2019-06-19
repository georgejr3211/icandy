import { Usuario } from '../usuarios/model';
import { TelefoneUsuario } from './model';

export async function getAllItems(params) {
  try {
    const resources = await TelefoneUsuario.findAndCountAll({
      order: [['id', 'DESC']],
      include: [{
        model: Usuario,
      }]
    });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOneItem(id) {
  try {
    const resources = await TelefoneUsuario.findByPk(id, { include: Usuario });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createItem(data) {
  try {
    const resources = await TelefoneUsuario.create(data);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateItem(id, data) {
  try {
    const resources = await TelefoneUsuario.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteItem(id) {
  try {
    const resources = await TelefoneUsuario.destroy({ where: { id } })

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}