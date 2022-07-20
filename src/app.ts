import express from 'express';
import cors from 'cors';
import mongoose, { ConnectOptions } from "mongoose";
import CodigoAcessoRouter from './routers/codigo_acesso.routers';
import ContatoRouter from './routers/contato.routers';


export class App {
    private express: express.Application;
    private porta = 9000;

    constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routers();
        this.listen();

    }

    public getApp(): express.Application {
        return this.express;
    }

    private listen() {
        this.express.listen(this.porta, () =>
            console.log('servidor rodando na porta ' + this.porta))
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private async database(): Promise<void> {
        await mongoose.connect('mongodb+srv://fellipe:Fellipe012@cluster0.z64b8.mongodb.net/?retryWrites=true&w=majority', {
        })
    }

    private routers(): void {
        this.express.use('/api', CodigoAcessoRouter);
        this.express.use('/api', ContatoRouter);
    }

}