import { FinMontModel } from "./finMonto.model";

export interface FinDeudaModel {
    deuId: number;
    usuCedula: string;
    deuFechaCorte: Date;
    deuSaldo: number;
    deuCancelado: boolean;
    deuSaldoView?: string;
    deuPagoActivo?: boolean;
    monto:FinMontModel;
}
