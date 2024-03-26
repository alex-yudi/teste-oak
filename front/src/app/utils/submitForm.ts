'use server'

import { api } from "@/lib/axios";


type Product = {
    name: string,
    description: string,
    value: number,
    available: string | boolean,
}


export async function submitRegisterProduct(product: Product) {
    await api.post('/products', product);
}