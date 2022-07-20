import ContatoSchema from "../models/contato.models"
import { Request, Response } from "express";


class ContatoController{
    public async cadastrarContato(req: Request, res: Response): Promise<Response>{
        try{
            const contato = await ContatoSchema.create(req.body);
            const resposta = {
                message: 'Contato Criado',
                nome: contato.nome
            }
            return res.json(resposta)
        } catch{
            const message = {
                erro: 'Não foi possivel cadastrar um contato'
            }
            return res.json(message)
        }
    }
}

export default new ContatoController();