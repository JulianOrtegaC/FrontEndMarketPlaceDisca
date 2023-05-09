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
    IdUser:string;
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
    idService ?:string;
    categoria:string;
    nameService:string;
    description :string;
    initialPrice ?:string;
    pathPhotos :string;
    address:string;
    datesDispo :string;
}
