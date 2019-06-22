"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./v1/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _morgan.default)(':method :url :response-time :status'));
app.get('/', (req, res) => {
  res.json({
    appName: 'iCandy'
  });
});
app.use('/api/v1', _routes.default);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server on at port ${port}`));