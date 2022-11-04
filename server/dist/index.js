"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get('/', (req, res) => {
  res.json({
    message: "server is running"
  });
});
zomato.listen(4000, () => {
  console.log("server is running");
});