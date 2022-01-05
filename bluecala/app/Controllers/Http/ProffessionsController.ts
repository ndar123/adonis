import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Proffession from 'App/Models/Proffession'

export default class ProffessionsController {
    public async index(ctx:HttpContextContract){
         return Proffession.all() //select *from proffession
    }
    public async store({ request, response }:HttpContextContract){
       
        const body = request.body()// TODO VALIDATION
        const proffession =await Proffession.create(body) // create instance and save in one go

        response.status(201);
        return proffession
   }
   public async show({ params }:HttpContextContract){
    return Proffession.findOrFail(params.id)
}
public async update({ params, request }:HttpContextContract){
    const body = request.body()
    const proffession= await Proffession.findOrFail(params.id)
    proffession.name = body.name
    return proffession.save()
}
public async destroy({params}:HttpContextContract){
    const proffession= await Proffession.findOrFail(params.id)
    return proffession.delete()
}
}
