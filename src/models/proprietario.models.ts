import { Schema, model, Document } from "mongoose";
import { Request, Response } from "express";


const ProprietarioSchema = new Schema({
    nome: {
        required: true,
        type: String,
        null: true
    },
    cpf: {
        required: true,
        type: String,
        null: true
    },
    replicar_endereco: {
        required: true,
        type: Boolean,
        null: true
    },
    telefone: {
        required: true,
        type: String,
        null: true
    },
    rg: {
        required: true,
        type: String,
        null: true
    },
    orgao_expedidor: {
        required: true,
        type: String,
        null: true
    },
    email: {
        required: true,
        type: String,
        null: true
    }
})


export default model('ProprietarioSchema', ProprietarioSchema)