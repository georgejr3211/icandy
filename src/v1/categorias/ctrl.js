import { Router } from 'express';
const router = Router();

router.get('/', async (req, res, next) => {
  res.json('HelloWorld');
});

export default router;