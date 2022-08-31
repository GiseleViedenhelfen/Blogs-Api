const express = require('express');
// ...
const controller = require('../controllers/userController');
const middle = require('../middlewares/login');
const token = require('../validators/createJWT');

const app = express();

app.use(express.json());

app.post('/login',
middle.emailCheck,
middle.passwordCheck,
middle.passwordAndEmailCheck,
token,
controller.login);
// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
