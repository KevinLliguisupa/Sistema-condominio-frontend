import { Component, OnInit } from '@angular/core';
import { CtrReunionModel, CtrReunionModelSave } from '../../models/ctrReunion.model';
import { CtrLugarModel } from '../../models/ctrLugar.model';
import { CtrReunionService } from '../../services/ctrReunion/ctrReunion.service';
import { CtrLugarService } from '../../services/ctrLugar/ctrLugar.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { validateForm } from 'src/utils/FormValidation';

@Component({
  selector: 'app-ctrReunion',
  templateUrl: './ctrReunion.component.html',
  styleUrls: ['./ctrReunion.component.css']
})
export class CtrReunionComponent implements OnInit {

  reuniones: CtrReunionModel[] = [];
  lugares: CtrLugarModel[] = [];
  display = "none";
  isEdit: boolean = false;
  newReunion: CtrReunionModelSave = {
    usuCedula: '',
    reuFecha: new Date(),
    lugId: 0,
    reuId: 0,
  };
  validationRules = {
    required: ['reuFecha', 'lugId'],
  };
  errors = {
    reuFecha: null,
    lugId: null
  };

  constructor(
    private _ctrReunionService: CtrReunionService,
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
        reuFecha: this.newReunion.reuFecha,
        lugId: this.newReunion.lugId
      },
      this.validationRules,
    );
    const validForm = Object.keys(errors).length;
    this.errors = { ...errors };
    return !validForm;
  };

  getReuniones() {
    this._ctrReunionService.getAllReuniones().subscribe(result => {
      this.reuniones = result;
    })
  }
  getLugares() {
    this._ctrLugarService.getAllLugares().subscribe(result => {
      this.lugares = result;
    })
  }

  openAddModal() {
    this.newReunion = {
      usuCedula: '',
      reuFecha: new Date(),
      lugId: 0,
      reuId: 0,
    };
    this.clearErrors();
    this.isEdit = false;
    this.display = "block";
  }

  openEditModal(data: CtrReunionModel) {
    this.newReunion = { ...data, lugId: data.lugId.lugId };
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
        this._ctrReunionService.deleteReunion(id).subscribe((result) => {
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
      this._ctrReunionService.updateReunion({
        reuId: this.newReunion.reuId ? this.newReunion.reuId : 0,
        reuFecha: this.newReunion.reuFecha,
        lugId: this.newReunion.lugId,
      }).subscribe(result => {
        this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acci??n finaliz?? con ??xito. ' });
        this.onCloseHandled();
        this.getReuniones();
      }, error => {
        const {message} = error.error;
        this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: message ? message:'Tuvimos un problema en finalizar tu acci??n. ' });
      })
    } else {
      this._ctrReunionService.addReunion({
        usuCedula: '0850055237',
        reuFecha: this.newReunion.reuFecha,
        lugId: this.newReunion.lugId,
      }).subscribe(result => {
        this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acci??n finaliz?? con ??xito. ' });
        this.onCloseHandled();
        this.getReuniones();
      }, error => {
        const {message} = error.error;
        this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: message ? message: 'Tuvimos un problema en finalizar tu acci??n. ' });
      })
    }
  }

  clearErrors() {
    this.errors = {
      reuFecha: null,
      lugId: null
    };
  }

}
