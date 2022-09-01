const express = require('express');
// ...
const controller = require('../controllers/userController');
const categoryController = require('../controllers/categoriesController');
const middle = require('../middlewares/login');
const middleUser = require('../middlewares/user');
const middleCategory = require('../middlewares/categories');
const token = require('../validators/createJWT');
const validators = require('../validators/validateJWT');

const app = express();

app.use(express.json());

app.post('/login',
middle.emailCheck,
middle.passwordCheck,
middle.passwordAndEmailCheck,
token);
app.get('/user',
validators.validToken,
controller.getAll);

app.post('/user', 
middleUser.name,
middleUser.emailCheck,
middleUser.passwordCheck,
middleUser.existentUser,
controller.createUser);

app.post('/categories',
validators.validToken,
middleCategory.categoryName,
categoryController.createCategory);

app.get('/categories',
validators.validToken,
categoryController.getAll);

app.use(middleUser.error);
// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
