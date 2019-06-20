import { Router } from 'express';
import * as resourceService from './service';
const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const { page = 0, limit = 10 } = req.query;
    const params = {
      page: parseInt(page),
      limit: parseInt(limit),
    };

    const results = await resourceService.getAllItems(params);
    return res.json(results);
  } catch (error) {
    res.status(500).json({
      method: 'GET',
      error
    });
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await resourceService.getOneItem(id);
    return res.json(results);
  } catch (error) {
    res.status(500).json({
      method: 'GET',
      error
    });
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const resource = await resourceService.createItem(req.body);
    return res.json(resource);
  } catch (error) {
    res.status(500).json({
      method: 'POST',
      error
    });
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const resource = await resourceService.updateItem(id, req.body);
    return res.json(resource);
  } catch (error) {
    res.status(500).json({
      method: 'PUT',
      error
    });
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const resource = await resourceService.deleteItem(id);
    return res.json(resource);
  } catch (error) {
    res.status(500).json({
      method: 'DELETE',
      error
    });
    next(error);
  }
});

export default router;