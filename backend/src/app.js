const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const { errors } = require('celebrate')

const app = express();

app.use(cors())

app.use(express.json())
app.use(routes)
app.use(errors())

/**
 * rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parametros
   * 
   * Query: Parametros nomeados enviados na rota apos "?" ( filtros paginação)
   * Route params: parametros utilizados para indentificar recursos
   * Request body: corpo da requisição, utilizado para criar ou alterar recursos
   */

/**
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Miscrosoft SQl Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */

 /**
  * Driver: SELECT * FROM users
  * Query builder: table('users').select('*').where()
  */


module.exports = app
