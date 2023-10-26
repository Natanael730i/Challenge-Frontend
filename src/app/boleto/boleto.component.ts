import {Component, Inject, OnInit} from '@angular/core';
import {BoletoService} from "../service/boleto.service";
import {NgForm} from "@angular/forms";
import {Boleto} from "../model/boleto";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {PessoaService} from "../service/pessoa.service";

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.component.html',
  styleUrls: ['./boleto.component.css']
})
export class BoletoComponent implements OnInit{
  displayedColumns: string[] = ['id', 'pessoa', 'dataVencimento', 'status', 'acoes', 'detalhes'];
  dataSource = this.carregaLista();
  boletos: Boleto[] = [];
  constructor(private service: BoletoService,
              public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.carregaLista();
  }

  cancelar(boleto:any){
    console.log(boleto)
    this.service.cancel(boleto).subscribe(resposta =>{
      this.boletos.push(<Boleto>resposta);
    })
    this.ngOnInit();
  }

  carregaLista(){
    return this.service.list();
  }

  onSubmit(f: NgForm) {
    console.log(f.value)
    this.service.create(f.value).subscribe(resposta => {

      f.reset();
    });
    this.carregaLista();
  }

  pagar(boleto: any) {
    this.service.payment(boleto).subscribe(resposta =>{
      this.boletos.push(<Boleto>resposta);
    });
  }

  openDialog(boleto:Boleto) {
    this.dialog.open(DialogElementsExampleDialog, {
      data:{
        boleto: boleto
      }
    });

  }
}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'detalhes.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatListModule],
})
export class DialogElementsExampleDialog implements OnInit{

  boleto: any;
  pessoa: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service: BoletoService,
              private pessoaService: PessoaService) {
  }

  umBoleto(){
    this.service.listCharacteristicOneBill(this.data.boleto.id).subscribe(resposta =>{
      this.boleto = resposta;
    });
    this.pessoaService.findOne(this.data.boleto.pessoa).subscribe(resposta =>{
      this.pessoa = resposta;
    })
  }

  ngOnInit(): void {
    this.umBoleto();
  }

}
