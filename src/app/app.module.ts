import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { FinMontoComponent } from 'src/app/Financiero/components/finMonto/finMonto.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from 'src/app/helpers/auth.interceptor';
import { CtrUsuarioComponent } from 'src/app/Control/components/ctrUsuario/ctrUsuario.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Core/Login/components/login.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CtrAnuncioComponent } from './Control/components/ctrAnuncio/ctrAnuncio.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';
import { CtrTipoAnuncioComponent } from './Control/components/ctrTipoAnuncio/ctrTipoAnuncio.component';
import { CtrLugarComponent } from './Control/components/ctrLugar/ctrLugar.component';
import { CtrReunionComponent } from './Control/components/ctrReunion/ctrReunion.component';
import { CtrReservacionComponent } from './Control/components/ctrReservacion/ctrReservacion.component';

@NgModule({

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    DataTablesModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    MessagesModule,
    NgbModule,
    ToastModule
  ],
  declarations: [
    AppComponent,
    FinMontoComponent,
    CtrUsuarioComponent,
    LoginComponent,
    CtrAnuncioComponent,
    CtrTipoAnuncioComponent,
    CtrLugarComponent,
    CtrReunionComponent,
    CtrReservacionComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
