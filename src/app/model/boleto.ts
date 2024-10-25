import {Pessoa} from "./pessoa";
import {Status} from "./enums/status";
import {Vencimentos} from "./enums/vencimentos";

export interface Boleto {

  id : string;
  valor : number;
  pessoa : Pessoa;
  vencimentos : Vencimentos;
  dataVencimento: Date;
  status  : Status;
  createdAt : Date;

}
