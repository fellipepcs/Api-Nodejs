import { Router } from "express";
import ProprietarioController from "../controllers/proprietario.controller";


const ProprietarioRouter = Router();

ProprietarioRouter.post('/proprietario', ProprietarioController.cadastrarProprietario)

export default ProprietarioRouter;