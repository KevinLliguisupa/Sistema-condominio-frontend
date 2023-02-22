import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CtrLugarModel, CtrLugarModelSave } from '../../models/ctrLugar.model';
import { CtrLugarService } from '../../services/ctrLugar/ctrLugar.service';
import { validateForm } from '../../../../utils/FormValidation';

@Component({
  selector: 'app-ctrLugar',
  templateUrl: './ctrLugar.component.html',
  styleUrls: ['./ctrLugar.component.css']
})
export class CtrLugarComponent implements OnInit {

  lugares: CtrLugarModel[] = [];
  display = "none";
  newLugar: CtrLugarModelSave = {
    lugNombre: '',
  };
  validationRules = {
    required: ['lugNombre'],
  };
  errors = {
    lugNombre: null,
  };
  isEdit: boolean = false;

  constructor(
    private _ctrLugarService: CtrLugarService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getLugares();
  }
  validForm = () => {
    const errors = validateForm(
      {
        lugNombre: this.newLugar.lugNombre,
      },
      this.validationRules,
    );
    const validForm = Object.keys(errors).length;
    this.errors = { ...errors };
    return !validForm;
  };

  getLugares() {
    this._ctrLugarService.getAllLugares().subscribe(result => {
      this.lugares = result.filter(l => l.lugDisponible);
    })
  }

  openAddModal() {
    this.newLugar = {
      lugNombre: '',
    };
    this.clearErrors();
    this.isEdit = false;
    this.display = "block";
  }

  openEditModal(data: CtrLugarModel) {
    this.newLugar = { ...data };
    this.clearErrors();
    this.isEdit = true;
    this.display = "block";
  }

  delete(id?: number): void {
    if (!id) return;
    this.confirmationService.confirm({
      message: '¿Estás seguro de eliminar este registro?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Aceptar',
      acceptButtonStyleClass: 'btn btn-danger',
      rejectLabel: 'Cancelar',
      rejectButtonStyleClass: 'btn btn-secondary',
      accept: () => {
        this._ctrLugarService.deleteLugar(id).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acción finalizó con éxito. ' });
          this.getLugares();
        }, error => {
          this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: 'Tuvimos un problema en finalizar tu acción. ' });
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
      this._ctrLugarService.updateLugar({
        lugNombre: this.newLugar.lugNombre,
        lugId: this.newLugar.lugId
      }).subscribe(result => {
        this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acción finalizó con éxito. ' });
        this.onCloseHandled();
        this.getLugares();
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: 'Tuvimos un problema en finalizar tu acción. ' });
      })
    } else {
      this._ctrLugarService.addLugar({
        lugNombre: this.newLugar.lugNombre,
      }).subscribe(result => {
        this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acción finalizó con éxito. ' });
        this.onCloseHandled();
        this.getLugares();
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: 'Tuvimos un problema en finalizar tu acción. ' });
      })
    }

  }

  clearErrors() {
    this.errors = {
      lugNombre: null,
    };
  }

}
