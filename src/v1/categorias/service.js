import { Categoria } from "./model";

export async function getAllItems(params) {
  try {
    const resources = await Categoria.findAndCountAll({
      where: { ativo: 1 },
      order: [['id', 'DESC']]
    });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOneItem(id) {
  try {
    const resources = await Categoria.findByPk(id, {
      where: { ativo: 1, id },
    });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createItem(data) {
  try {
    const resources = await Categoria.create(data);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateItem(id, data) {
  try {
    const resources = await Categoria.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteItem(id) {
  try {
    const resources = await Categoria.update({ ativo: false }, { where: { id } })

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}