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
    IdUser?:string;
    NameUser?: string;
    LastNameUser?: string;
    Address?: string;
    Telephone?: string;
    Email?: string;
    TypeDocument?: string;
    Gender?: string;
    Photo?: string;
    CoverPhoto?: string;
    BirthDate?: string;
}
export interface Service{
    idUser?:string;
    idService ?:string;
    categoria:string;
    nameService:string;
    description :string;
    preview:string;
    initialPrice :number;
    pathPhotos :string;
    address:string;
    datesDispo :string;
    dispo:string;
}

export interface ContactService{
    telephone:string;
    email:string;
}

export interface RequestService{
    userIdUser?:string;
    serviceIdService ?:string;
    nameService?:string;
    status?:string;
}