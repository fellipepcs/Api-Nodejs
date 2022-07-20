import { CodigoAcessoInterface } from './../interfaces/codigo_acesso.interface';
import { Document, model, Schema } from "mongoose";


interface CodigoAcessoModels extends CodigoAcessoInterface, Document {
}

const CodigoAcessoModel = new Schema({
    id_imobiliario: {
        type: Number,
        required: true,
        unique: true
    },
    codigo_acesso: {
        type: String,
        required: true,
        unique: true
    }
})

export default model<CodigoAcessoModels>('CodigoAcesso', CodigoAcessoModel)