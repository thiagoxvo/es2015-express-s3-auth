'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/public', _express2.default.static(__dirname));

app.get('/hello', function (req, res) {
  return res.send('worlds');
});

app.listen(3000, function () {
  return console.log('makin music on 3000');
});