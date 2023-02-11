export interface CtrReservacionModel {
    res_id:number;
    lug_id:number;
    usu_cedula:string;
    res_fecha:Date;
    res_hora_inicio:Date;
    res_hora_fin:Date;
    res_aprobado:boolean;
    res_activa:boolean;
}
