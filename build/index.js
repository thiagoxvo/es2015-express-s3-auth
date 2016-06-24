'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.port || 3000;

app.use('/public', _express2.default.static(__dirname));

app.get('/hello', function (req, res) {
  return res.send('worlds');
});

app.listen(port, function () {
  return console.log('makin music on ' + port);
});
//# sourceMappingURL=index.js.map