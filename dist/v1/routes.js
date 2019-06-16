"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ctrl = _interopRequireDefault(require("./categorias/ctrl"));

var _ctrl2 = _interopRequireDefault(require("./perfis/ctrl"));

var _ctrl3 = _interopRequireDefault(require("./enderecos/ctrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/categorias', _ctrl.default);
router.use('/perfis', _ctrl2.default);
router.use('/enderecos', _ctrl3.default);
var _default = router;
exports.default = _default;