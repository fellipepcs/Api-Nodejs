import { Request, Response } from "express";
import CodigoAcessoModel from "../models/codigo_acesso.models"


class CodigoAcessoController{
    public async cadastrarCodigoAcesso(req: Request, res: Response): Promise<Response>{
        const codigo_acesso = await CodigoAcessoModel.create(req.body);
        return res.json(codigo_acesso);
    }
}

export default new CodigoAcessoController();