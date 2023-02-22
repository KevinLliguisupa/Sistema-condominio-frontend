import { Component, OnInit } from '@angular/core';
import { FinPagoService } from '../../services/finPago/finPago.service';
import { LazyLoadEvent } from 'primeng/api';
import { FinReciboModel } from '../../models/finRecibo.model';

@Component({
  selector: 'app-finPago',
  templateUrl: './finPago.component.html',
  styleUrls: ['./finPago.component.css']
})
export class FinPagoComponent implements OnInit {

  pagosConsultados: FinReciboModel[] = [];
  pagoDetalle: FinReciboModel = {
    pagId: 0,
    usuCedula: "",
    usuApellidos: "",
    usuNombres: "",
    usuCorreo: "",
    pagValor: 0,
    cedTesorero: "",
    detalles: [{}]
  };
  size: number = 5;
  page: number = 0;
  totalRecords: number = 0;
  loading: boolean = true;
  detallesDialog: boolean = false;

  constructor(
    private pagoService: FinPagoService
  ) { }

  ngOnInit() {
    this.getPagosByPage(this.size, this.page);

  }

  public getPagosByPage(size: number, page: number) {
    this.pagoService.getPagos(size, page).subscribe({
      next: (response: any) => {
        this.pagosConsultados = response.content;
        this.totalRecords = response.totalElements;
      },
      error(err) {
        console.error(err);
      }
    })
  }


  nextPage(event: LazyLoadEvent) {
    this.loading = true;
    let size = event.rows!
    let page: number = event.first! / event.rows!

    this.pagoService.getPagos(size, page).subscribe({
      next: (response: any) => {
        this.pagosConsultados = response.content;
      }, error(err) {
        console.error(err);
      }
    })
    setTimeout(() => {
      this.loading = false;
    }, 175);
  }

  public openDialog(pagoId: number) {
    this.detallesDialog = true;

    this.pagoService.getPagoById(pagoId).subscribe({
      next: (response: any) => {
        this.pagoDetalle = response;
      }, error(err) {
        console.error(err);
      },
    })

  }

  public hideDialog() {
    this.detallesDialog = false;
    this.pagoDetalle = {
      pagId: 0,
      usuCedula: "",
      usuApellidos: "",
      usuNombres: "",
      usuCorreo: "",
      pagValor: 0,
      cedTesorero: "",
      detalles: [{}]
    };
  }

}
