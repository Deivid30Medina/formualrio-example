export interface PqrsFormData {
    typeRequest: string;
    reasonRequest: string;
    typePerson?: string;
    typeDocument?: string;
    numberDocument?: string;
    name?: string;
    lastName?: string;
    secondLastName?: string | null;
    nit?: string;
    razonSocial?: string;
    responseMedium?: string;
    email?: string;
    responseMediumAnonymous?: string | null;
    emailAnonymous?: string | null;
    phoneNumber?: string;
    descriptionPqrs?: string;
    typePopulation?: string;
    typeDisability?: string;
    pqrsFile?: File | null;
    aceptaTerminos?: boolean | null;
}
