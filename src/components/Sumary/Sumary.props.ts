export interface IActivity {
    number: number | string,
    name: string;
}

export interface ISumary {
    first_name: string;
    last_name: string;
    gender: string;
    birth_date: string;
    id: number;
    home_phone: string;
    mobile_phone: string;
    work_phone: string;
    email: string;
    activity: IActivity[];
    smsCarrier: IActivity[],
}