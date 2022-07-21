import { Router } from "express";
import ContatoController from "../controllers/contato.controller";


const ContatoRouter = Router();

ContatoRouter.post('/contato', ContatoController.cadastrarContato )
ContatoRouter.get('/contato', ContatoController.buscarContato)

export default ContatoRouter;