
// importando bibliotecas
const koa = require('koa')
const Router = require('koa-router')
const applyRoutes = require('./routes')

// iniciando servidor e rotas
const app = new koa()
const router = new Router()

// exporta dados para outro arquivo
module.exports = () =>{
console.log('[koa]Creating new server')
applyRoutes(router)
app.use(router.routes())
app.listen(8080)
}