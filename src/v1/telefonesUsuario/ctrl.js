import { Router } from 'express';
import * as resourceService from './service';
const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await resourceService.getAllItems();
    return res.json(results);
  } catch (error) {
    next(`[GET] => ${error}`);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await resourceService.getOneItem(id);
    return res.json(results);
  } catch (error) {
    next(`[GET ID] => ${error}`);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const resource = await resourceService.createItem(req.body);
    return res.json(resource);
  } catch (error) {
    next(`[POST] => ${error}`);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const resource = await resourceService.updateItem(id, req.body);
    return res.json(resource);
  } catch (error) {
    next(`[PUT] => ${error}`);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const resource = await resourceService.deleteItem(id);
    return res.json(resource);
  } catch (error) {
    next(`[DELETE] => ${error}`);
  }
});

export default router;