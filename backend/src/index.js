const express =  require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Tipos de requisição
 * 
 * GET: Buscar informação no back-end;
 * POST: Enviar informação ao back-end;
 * PUT: Atualizar informação no back-end;
 * DELETE: Excluir informação no back-end;
 */

 /**
  * Tipos de Parâmetros
  * 
  * Query Params: Parâmtros nomeados na rota. Ex.: /users?nome=Luiz;
  * Route Params: Parâmetros utilizados para identificar recursos. Ex.: .../users/1; [(.../users/:id)];
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos;
  */

app.use(routes);

app.listen(9001);