export interface TypeOrder {
    id: number,
    order_id: number,
    sent_dt: string,
    sent_tm: string
    subject: {
        email: string,
        title: string
    },
    type: string
}

export interface IOrder {
    sent: TypeOrder[]
}

export interface Order {
    orders_A: TypeOrder[],
    orders_AA: TypeOrder[],
    orders_AAA: IOrder,
    orders_B: TypeOrder[],
    orders_C: TypeOrder[],
}
export interface IOrderState {
    data: Order,
    error: string,
    pending: boolean,
    request: null,
    sort: boolean
}