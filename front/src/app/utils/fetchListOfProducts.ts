import { cache } from 'react'
import { api } from '@/lib/axios'

export const fetchListOfProducts = cache(async () => {
    const { data } = await api.get('/products');

    return data
})
