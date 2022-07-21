import ProprietarioSchema from "../models/proprietario.models"
import { Request, Response } from "express";


class ProprietarioController {
  public async cadastrarProprietario(req: Request, res: Response): Promise<Response> {
    try {
      const { cpf } = req.body;
      cpf_isvalidado(cpf, res);

      const propritario = await ProprietarioSchema.create(req.body);
      const respostaReq = {
        message: "Proprietário cadastrado",
        Nome: propritario.nome
      }
      return res.status(200).send({ respostaReq })
    } catch {
      return res.status(404).send({ erro: "Não foi possivel cadastrar um proprietario" })
    }
  }
}

export default new ProprietarioController();

function cpf_isvalidado(cpf: string, res: Response){
  const cpfValido = validaCpf(cpf)
  if (!cpfValido) {
    return res.status(404).send({ erro: "CPF Invalido" })
  }
}


function validaCpf(cpf: string) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  var result = true;
  [9, 10].forEach(function (j) {
    var soma = 0, r;
    cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
      soma += parseInt(e) * ((j + 2) - (i + 1));
    });
    r = soma % 11;
    r = (r < 2) ? 0 : 11 - r;
    if (r != cpf.substring(j, j + 1)) result = false;
  });
  return result;
}

