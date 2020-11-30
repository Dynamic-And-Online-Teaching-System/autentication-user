const Boom = require ('boom')
const services = require ('../auth/services')

// exportando obj
module.exports = {

    auth: async ctx => {
        const { request,response } = ctx
        const user = await services.auth(request.body)
        console.log(user)
        if(user){
            response.body = user
        } else{
            response.body = {result: boom.badRequest() }
        }
    }
}