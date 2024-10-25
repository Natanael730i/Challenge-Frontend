import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pessoa} from "../model/pessoa";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  API = 'http://localhost:8080/pessoa/';
  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Array<any>>(this.API + 'list')
  }

  findOne(id:number){
    return this.httpClient.get(this.API + id)
  }

  save(pessoa: Pessoa){
    return this.httpClient.post<any>(this.API + 'create', pessoa)
  }

  delete(id:number) {
    return this.httpClient.delete<any>(this.API + 'delete/' + id);
  }

  alter(id:string, pessoa: Pessoa) {
    return this.httpClient.put<any>(this.API + 'alter/' + id, pessoa);
  }
}
