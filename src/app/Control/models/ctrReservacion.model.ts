import { CtrLugarModel } from "./ctrLugar.model";

export interface CtrReservacionModel {
    resId: number;
    lugId: CtrLugarModel;
    usuCedula: string;
    resFecha: Date;
    resHoraInicio: string;
    resHoraFin: string;
    resAprobado: boolean;
    resActiva: boolean;
}

export interface CtrReservacionModelSave {
    lugId: number;
    usuCedula?: string;
    resFecha: Date;
    resHoraInicio: string;
    resHoraFin: string;
    resId?: number;
}

