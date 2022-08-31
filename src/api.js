const express = require('express');
// ...
const controller = require('../controllers/userController');
const middle = require('../middlewares/login');
const middleUser = require('../middlewares/user');
const token = require('../validators/createJWT');

const app = express();

app.use(express.json());

app.post('/login',
middle.emailCheck,
middle.passwordCheck,
middle.passwordAndEmailCheck,
token);
// controller.login

app.post('/user', 
middleUser.name,
middleUser.emailCheck,
middleUser.passwordCheck,
middleUser.existentUser,
controller.createUser);
// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
