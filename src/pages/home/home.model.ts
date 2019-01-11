
export class PatientsPostModel {
    name: string;
    prov: string;
    idnum: number;
    mr: string;
    insurance: string;
    address: string;
    city: string;
    st: string;
    phone: string;
    dob: string;
    admit: string;
    dc: string;
    order_by: string;
    limit_to: number;
    order: string;
}

export class PatientsModel {
    total: number = 0;
    total_pages: number = 0;
    state: string = "";
    error: string = "";
    public patientsList: Array<PatientsPostModel> = [];

}
