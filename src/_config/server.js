// importando bibliotecas
const koa = require('koa')
const Router = require('koa-router')

// iniciando servidor e rotas
const app = new koa()
const router = new Router()

// exporta dados para outro arquivo
module.exports = () =>{
console.log('[koa]Creating new server')

// direcionando rota
router.get('/', ctx =>{
    const {response} = ctx
    response.body = {menssage:'Olá, koa2'}
})
app.use(router.routes())
app.listen(8080)
}