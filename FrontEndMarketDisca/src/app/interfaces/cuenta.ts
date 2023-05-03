export interface Registro {
    idUser: string;
    nameUser: string;
    lastNameUser: string;
    birthDate: Date;
    email: string;
    typeDocument: string;
    gender: string;
    password: string;
}


export interface EditData {
    idUser:string;
    nameUser?: string;
    lastNameUser?: string;
    address?: string;
    telephone?: string;
    email?: string;
    typeDocument?: string;
    gender?: string;
    photo?: string;
    coverPhoto?: string;
    birthDate?: string;
}

