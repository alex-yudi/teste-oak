import { Product } from "@/@types/product";
import { registerProduct } from "@/services/register-product";
import { FastifyReply, FastifyRequest } from "fastify";

export async function registerProductReq(request: FastifyRequest, reply: FastifyReply) {
    const { name, description, value, available } = request.body as Product;

    try {
        const productRegistered = await registerProduct({
            name, description, value, available
        })


        return reply.status(200).send(productRegistered);
    } catch (error: any) {
        return reply.status(500).send(`Erro no campo: ${error.meta.target}, já existe item com esse nome`)
    }
}