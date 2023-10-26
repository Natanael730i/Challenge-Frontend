import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Boleto} from "../model/boleto";

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private API = 'http://localhost:8080/boleto/'
  constructor(private http: HttpClient) { }

  listBoletoPessoaPendente(id:number){
    return this.http.get(this.API + 'list/pessoa' + id);
  }
  list(){
    return this.http.get<Array<any>>(this.API + 'list');
  }
  create(boleto:Boleto){
    return this.http.post<any>(this.API + 'create', boleto);
  }
  alter(id:number, boleto:Boleto){
    return this.http.put(this.API + 'update/' + id, boleto);
  }
  listCharacteristicOneBill(id:number){
    return this.http.get(this.API + 'list/' + id);
  }
  listCharacteristicSettledBills(id:number){
    return this.http.get(this.API +'list/settled/' + id);
  }
  listCharacteristicCanceledBills(id:number){
    return this.http.get(this.API + 'list/canceled/' + id);
  }
  listCharacteristicPendingBills(id:number){
    return this.http.get(this.API + 'list/pending/' + id);
  }
  payment(boleto:Boleto){
    return this.http.put(this.API + 'payment/' + boleto.id, boleto)
  }
  cancel(boleto:Boleto){
    return this.http.put<any>(this.API + 'cancel/' + boleto.id, boleto)
  }
}
