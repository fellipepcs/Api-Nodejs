import { model, Schema } from "mongoose";

const CodigoAcessoModel = new Schema({
    id_imobiliario:{
        type: Number,
        required: true,
        unique:true
    },
    codigo_acesso:{
        type: String,
        required: true,
        unique:true
    }
})

export default model('CodigoAcesso',CodigoAcessoModel)