import { Address } from "./address.model"

export interface Vote {
    nationalCode: string,
    firstName: string,
    lastName: string,
    age: number,
    address: Address,
    selectedPresidentId: string
}