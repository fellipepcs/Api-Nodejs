import ContatoSchema from "../models/contato.models"
import { Request, Response } from "express";


class ContatoController {
  public async cadastrarContato(req: Request, res: Response): Promise<Response> {
    try {
      const contato = await ContatoSchema.create(req.body);
      const resposta = {
        message: 'Contato Criado',
        nome: contato.nome
      }
      return res.json(resposta)
    } catch {
      const message = {
        erro: 'Não foi possivel cadastrar um contato'
      }
      return res.json(message)
    }
  }
  public async buscarContato(req: Request, res: Response): Promise<any> {
    try {
      const contato = req.body;
      const listaContato = await ContatoSchema.findOne(contato)
      const nome = listaContato?.nome
      if (listaContato) {
        return res.status(200).send({ nome, message: "Contato encontrado"})
      } else {
        return res.status(404).send({ message: "Não foi possivel encontrar o contato" })
      }
    } catch {
      return res.status(404).send({ message: "Error na busca do contato" })
    }

  }
}

export default new ContatoController();