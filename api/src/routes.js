const express = require('express');
const routes = express.Router();

const controllerCliente = require('./controllers/controllercliente');
const controllerTelefone = require('./controllers/controllertelefone');
const controllerPedido = require('./controllers/controllerpedido');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'SNOOPY PetShop' });
});

routes.get('/clientes', controllerCliente.read);
routes.get('/clientes/:id', controllerCliente.readOne);
routes.post('/clientes', controllerCliente.create);
routes.put('/clientes/:id', controllerCliente.update);
routes.delete('/clientes/:id', controllerCliente.remove);

routes.get('/telefones', controllerTelefone.read);
routes.post('/telefones', controllerTelefone.create);
routes.put('/telefones/:id', controllerTelefone.update);
routes.delete('/telefones/:id', controllerTelefone.remove);

routes.get('/pedidos', controllerPedido.read);
routes.post('/pedidos', controllerPedido.create);
routes.put('/pedidos/:id', controllerPedido.update);
routes.delete('/pedidos/:id', controllerPedido.remove);

module.exports = routes;