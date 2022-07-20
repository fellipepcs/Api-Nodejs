import { ContatoInterface } from './../interfaces/contato.interface';
import { Schema, model, Document } from "mongoose";


interface ContatoModels extends ContatoInterface, Document {
}

const ContatoSchema = new Schema({
    nome: {
        type: String,
        required: true,
        null: false,
        max_length: 55
    },
    email: {
        type: String,
        required: true,
        null: false,
        max_length: 55
    },
    telefone: {
        type: String,
        required: true,
        null: false,
        max_length: 15
    }
})

export default model<ContatoModels>('ContatoSchema', ContatoSchema)