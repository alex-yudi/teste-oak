import { FastifyInstance } from 'fastify'
import { registerProductReq } from './controllers/products/register-products'
import { fetchListOfProducts } from './controllers/products/fetch-list-of-products'

export async function appRoutes(app: FastifyInstance) {
    app.post('/products', registerProductReq);
    app.get('/products', fetchListOfProducts);
}
