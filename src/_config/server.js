const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = new Router()



module.exports = () =>{

console.log('[koa]Creating new server')

router.get('/', ctx =>{
    const {response} = ctx
    response.body = {menssage:'Olá, koa2'}
})

app.use(router.routes())

//shielding port
app.listen(8080)
}