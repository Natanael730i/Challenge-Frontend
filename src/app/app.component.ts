import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Pessoa} from "./model/pessoa";
import {PessoaService} from "./service/pessoa.service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {BoletoService} from "./service/boleto.service";
import {Boleto} from "./model/boleto";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = ['id', 'nome', 'valorLimiteBoletos', 'acoes'];
  pessoas: Pessoa[] = [];
  pessoa: any;
  dataSource = this.carregaLista();


  constructor(private service: PessoaService,
              public dialog: MatDialog) {

  }
  onSubmit(f: NgForm) {
    this.service.save(f.value).subscribe(resposta => {

      f.reset();
    });
    this.carregaLista();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogoBoleto);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.carregaLista();
  }

  carregaLista(){
    return this.service.list();
  }

  apagar(id:number){
    console.log(id);
    this.service.delete(id).subscribe(resposta => {
      this.pessoas.push(resposta);
    })
    this.carregaLista();

  }


  alterar(pessoa: Pessoa, f: NgForm) {
    console.log(f.value)
      this.service.alter(pessoa.id, f.value).subscribe(resposta => {
        this.pessoas.push(resposta);

        f.reset();
      });
    }

  listarBoletos(id: string) {

  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'DialogStatus.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatSelectModule, NgForOf],
})
export class DialogContentExampleDialog implements OnInit{

  boletos: Boleto[] = [];
  boleto: any;
  constructor(private service: BoletoService, public dialog: MatDialog) {
  }

  carregaLista(){
    return this.service.list();
  }

  ngOnInit(): void {
    this.carregaLista();
  }
  escolhas: Escolha[] = [
    {status: 0, statusview: 'Pendente'},
    {status: 1, statusview: 'Quitado'},
    {status: 2, statusview: 'Cancelado'},
  ];

  openDialog() {
    const dialogRef = this.dialog.open(DialogoBoleto);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log('teste')
  }
}

export interface Escolha{
  status: number;
  statusview: string;
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'SelectDialagoStatus.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCardModule, MatTableModule, DatePipe, CurrencyPipe],
})
export class DialogoBoleto implements OnInit{

  boletos: any[] = []
  displayedColumns: string[] = ['pessoa', 'valor', 'vencimento', 'situacao'];

  dataSource:Observable<any> = this.carregaList();

  constructor(private service: BoletoService) {
  }

  carregaList(){
    return this.service.list();
  }

  getTotalCost() {
    return this.boletos.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit(): void {
    this.carregaList();
    console.log(this.dataSource)
  }
}
