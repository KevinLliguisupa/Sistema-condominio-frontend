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
import { FinPagoComponent } from './Financiero/components/finPago/finPago.component';
import { FinDeudaPagoComponent } from './Financiero/components/finDeudaPago/finDeudaPago.component';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import { CurrencyPipe } from '@angular/common';
import { FinDeudaComponent } from './Financiero/components/finDeuda/finDeuda.component';
import {TabViewModule} from 'primeng/tabview';

@NgModule({

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    InputNumberModule,
    PaginatorModule,
    PanelModule,
    CardModule,
    ToolbarModule,
    InputTextModule,
    TabViewModule
  ],
  declarations: [
    AppComponent,
    FinMontoComponent,
    CtrUsuarioComponent,
    LoginComponent,
    FinPagoComponent,
    FinDeudaPagoComponent,
    FinDeudaComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, multi: true,
  }, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
