import { Endereco } from '../enderecos/model';
import { Perfil } from '../perfis/model';
import { Usuario } from './model';

export async function getAllItems(params) {
  try {
    const resources = await Usuario.findAndCountAll({
      order: [['id', 'DESC']],
      include: [{
        model: Endereco,
      },{
        model: Perfil,
      }]
    });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOneItem(id) {
  try {
    const resources = await Usuario.findByPk(id, { include: [{
      model: Endereco,
    },{
      model: Perfil,
    }] });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createItem(data) {
  try {
    const resources = await Usuario.create(data);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateItem(id, data) {
  try {
    const resources = await Usuario.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteItem(id) {
  try {
    const resources = await Usuario.destroy({ where: { id } })

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}