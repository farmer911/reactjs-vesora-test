export interface IActivity {
    sms: number,
    email: number,
    orders: number
}

export interface ICarrier {
    since: string,
    status: string,
}

export interface ISumary {
    data: {
        activity: IActivity,
        birth_date: string,
        carrier_status: ICarrier,
        email: string,
        first_name: string,
        gender: string,
        home_phone: string,
        id: number,
        last_name: string,
        mobile_phone: string,
        photo_url: string | null,
        work_phone: string
    }
    error: string,
    pending: null | boolean,
    request: null
}