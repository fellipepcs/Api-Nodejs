import { Router } from "express";
import ContatoController from "../controllers/contato.controller";


const ContatoRouter = Router();

ContatoRouter.post('/contato', ContatoController.cadastrarContato )

export default ContatoRouter;