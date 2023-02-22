export interface CtrUsuarioModel {
    usuCedula:string;
    usuApellidos:string;
    usuNombres:string;
    usuCorreo:string;
    usuTelefono:string;
    usuClave:string;
    usuRol:string;
    usuEstado:boolean;
}

export interface Credentials{
  usuCedula: string;
  usuClave: string;
}
export interface CredentialsRol extends Credentials{
  usuRol: string;

}

export interface objectL{
  sub: string,
  exp: number,
  usuNombres: string,
  usuRol: string
}

export interface objectJWT{
  exp: number,
  sub: string,
  usuCedula: string,
  usuNombres: string

}
