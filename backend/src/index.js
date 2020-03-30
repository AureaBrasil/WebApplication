/*** 
 * Tipos de parametros
 * 
 * Query: "?" valores enviados após o ? que server para ser usados como filtros ou aginação
 * Route: utilizados para identificar recursos 
 * Request Body: corpo da tequisição, usado para criar e alterar recursos
*/
const express = require('express');
const cors = require('cors'); //usado para a aplicação front end consegur acessar o backend
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(errors());
app.use(routes);

//acessar local host 3333
app.listen(3333);