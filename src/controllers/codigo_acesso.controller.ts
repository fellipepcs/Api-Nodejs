import { Request, Response } from "express";
import CodigoAcessoModel from "../models/codigo_acesso.models"


class CodigoAcessoController {
    public async cadastrarCodigoAcesso(req: Request, res: Response): Promise<Response> {
        try {
            const codigo_acesso = await CodigoAcessoModel.create(req.body);
            const resposta = {
                message: 'Codigo Acesso Cadastrado',
                id: codigo_acesso._id
            }
            return res.json(resposta);
        } catch (e) {
            const message = {
                erro: 'Não foi possivel cadastrar um codigo de acesso'
            }
            return res.json(message);
        }
    }
}

export default new CodigoAcessoController();