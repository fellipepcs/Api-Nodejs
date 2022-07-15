import { Router } from "express";
import CodigoAcessoController from "../controllers/codigo_acesso.controller";

const CodigoAcessoRouter = Router();

CodigoAcessoRouter.post('/codigo_acesso', CodigoAcessoController.cadastrarCodigoAcesso);

export default CodigoAcessoRouter;