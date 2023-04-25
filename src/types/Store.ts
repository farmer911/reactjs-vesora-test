import { IOrderState } from "./IOrder";
import { ISumary } from "./ISumary";

export interface Store {
    profile: ISumary,
    order: IOrderState
}