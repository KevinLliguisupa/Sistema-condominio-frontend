import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { validateForm } from 'src/utils/FormValidation';
import { CtrLugarModel } from '../../models/ctrLugar.model';
import { CtrReservacionModel, CtrReservacionModelSave } from '../../models/ctrReservacion.model';
import { CtrLugarService } from '../../services/ctrLugar/ctrLugar.service';
import { CtrReservacionService } from '../../services/ctrReservacion/ctrReservacion.service';

@Component({
  selector: 'app-ctrReservacion',
  templateUrl: './ctrReservacion.component.html',
  styleUrls: ['./ctrReservacion.component.css']
})
export class CtrReservacionComponent implements OnInit {

  reservaciones: CtrReservacionModel[] = [];
  lugares: CtrLugarModel[] = [];
  display = "none";
  isEdit: boolean = false;
  newReservacion: CtrReservacionModelSave = {
    lugId: 0,
    usuCedula: '',
    resFecha: new Date(),
    resHoraInicio: '',
    resHoraFin: '',
  };
  validationRules = {
    required: ['resFecha', 'lugId', 'resHoraInicio', 'resHoraFin'],
  };
  errors = {
    resFecha: null,
    lugId: null,
    resHoraInicio: null,
    resHoraFin: null
  };

  constructor(
    private _ctrReservacionService: CtrReservacionService,
    private _ctrLugarService: CtrLugarService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getReuniones();
    this.getLugares();
  }
  validForm = () => {
    const errors = validateForm(
      {
        resFecha: this.newReservacion.resFecha,
        lugId: this.newReservacion.lugId,
        resHoraInicio: this.newReservacion.resHoraInicio,
        resHoraFin: this.newReservacion.resHoraFin,
      },
      this.validationRules,
    );
    const validForm = Object.keys(errors).length;
    this.errors = { ...errors };
    return !validForm;
  };

  getReuniones() {
    this._ctrReservacionService.getAllReservaciones().subscribe(result => {
      this.reservaciones = result;
    })
  }
  getLugares() {
    this._ctrLugarService.getAllLugares().subscribe(result => {
      this.lugares = result;
    })
  }

  openAddModal() {
    this.newReservacion = {
      lugId: 0,
      usuCedula: '',
      resFecha: new Date(),
      resHoraInicio: '',
      resHoraFin: '',
    };
    this.clearErrors();
    this.isEdit = false;
    this.display = "block";
  }

  openEditModal(data: CtrReservacionModel) {
    this.newReservacion = { ...data, lugId: data.lugId.lugId };
    this.isEdit = true;
    this.clearErrors();
    this.display = "block";
  }

  delete(id?: number): void {
    if (!id) return;
    this.confirmationService.confirm({
      message: '??Est??s seguro de eliminar este registro?',
      header: 'Confirmaci??n',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Aceptar',
      acceptButtonStyleClass: 'btn btn-danger',
      rejectLabel: 'Cancelar',
      rejectButtonStyleClass: 'btn btn-secondary',
      accept: () => {
        this._ctrReservacionService.deleteReservacion(id).subscribe((result) => {
          this.getReuniones();
          this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acci??n finaliz?? con ??xito. ' });
        }, error => {
          this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: 'Tuvimos un problema en finalizar tu acci??n. ' });
        });
      }
    });
  }
  onCloseHandled() {
    this.display = "none";
  }
  onSave() {
    const isValidForm = this.validForm();
    if (!isValidForm) {
      return;
    }
    if (this.isEdit) {
      this._ctrReservacionService.updateReservacion({
        resId: this.newReservacion.resId ? this.newReservacion.resId : 0,
        resFecha: this.newReservacion.resFecha,
        lugId: this.newReservacion.lugId,
        resHoraInicio: this.newReservacion.resHoraInicio,
        resHoraFin: this.newReservacion.resHoraFin,
      }).subscribe(result => {
        this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acci??n finaliz?? con ??xito. ' });
        this.onCloseHandled();
        this.getReuniones();
      }, error => {
        const {message} = error.error;
        this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: message ? message:'Tuvimos un problema en finalizar tu acci??n. ' });
      })
    } else {
      this._ctrReservacionService.addReservacion({
        usuCedula: '0850055237',
        resFecha: this.newReservacion.resFecha,
        lugId: this.newReservacion.lugId,
        resHoraInicio: this.newReservacion.resHoraInicio,
        resHoraFin: this.newReservacion.resHoraFin,
      }).subscribe(result => {
        this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acci??n finaliz?? con ??xito. ' });
        this.onCloseHandled();
        this.getReuniones();
      }, error => {
        const {message} = error.error;
        this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: message ? message:'Tuvimos un problema en finalizar tu acci??n. ' });
      })
    }
  }

  onApprovalReservacion(id?: number){
    if (!id) return;
    this.confirmationService.confirm({
      message: '??Est??s seguro de aprobar esta reservaci??n?',
      header: 'Confirmaci??n',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Aceptar',
      acceptButtonStyleClass: 'btn btn-danger',
      rejectLabel: 'Cancelar',
      rejectButtonStyleClass: 'btn btn-secondary',
      accept: () => {
        this._ctrReservacionService.approvalReservacion(id).subscribe((result) => {
          this.getReuniones();
          this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acci??n finaliz?? con ??xito. ' });
        }, error => {
          this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: 'Tuvimos un problema en finalizar tu acci??n. ' });
        });
      }
    });
  }

  clearErrors() {
    this.errors = {
      resFecha: null,
      lugId: null,
      resHoraInicio: null,
      resHoraFin: null
    };
  }

}
