const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

/* 
 * Rota / Recurso
 */

 /* 
 Métodos HTTP:

 GET: buscar uma informação no backend
 POST: Criar uma informação no backend
 Put: Alterando informações no backend
 DELETE: deletar informações no backend
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parametros nomeados enviados na rota após o "?" (Filtros, paginação) 
 * Route Params: Parametros utilizados para identificar recursos (/:id)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.use(routes);

app.listen(3333);