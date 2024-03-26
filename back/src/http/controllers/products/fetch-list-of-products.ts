import { getListOfProducts } from "@/services/get-list-of-products";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetchListOfProducts(request: FastifyRequest, reply: FastifyReply) {
    try {

        const fetchListOfProducts = await getListOfProducts()


        return reply.status(200).send(fetchListOfProducts);
    } catch (error: unknown) {
        throw error
    }
}