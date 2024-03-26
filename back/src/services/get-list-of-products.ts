import { prisma } from "@/lib/prisma";

export async function getListOfProducts() {

    const listOfProducts = await prisma.product.findMany({
        orderBy: {
            value: 'asc',
        },
    })

    return listOfProducts;
}