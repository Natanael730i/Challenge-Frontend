export interface Boleto {
  id:number;
  valor:number;
  pessoa:number;
  dataVencimento: Date;
  status:number; // 0 - PENDENTE 1 - LIQUIDADO 2 - CANCELADO
}
