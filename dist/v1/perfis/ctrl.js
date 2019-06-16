"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var resourceService = _interopRequireWildcard(require("./service"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const router = (0, _express.Router)();
router.get('/', async (req, res, next) => {
  try {
    const results = await resourceService.getAllItems(req.body);
    return res.json(results);
  } catch (error) {
    next(`[GET] => ${error}`);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const results = await resourceService.getAllItems(id);
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
    const {
      id
    } = req.params;
    const resource = await resourceService.updateItem(id, req.body);
    return res.json(resource);
  } catch (error) {
    next(`[PUT] => ${error}`);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const resource = await resourceService.deleteItem(id);
    return res.json(resource);
  } catch (error) {
    next(`[DELETE] => ${error}`);
  }
});
var _default = router;
exports.default = _default;