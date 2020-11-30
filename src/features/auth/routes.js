// importando controladores
const controllers = require ('../auth/controllers')

module.exports = router => {

    router.post('/v1/api/auth', controllers.auth)
}