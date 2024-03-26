import { Product } from "@/@types/product";
import { prisma } from "@/lib/prisma";

export async function registerProduct(product: Product) {
    const productRegistered = await prisma.product.create({
        data: {
            name: product.name,
            value: product.value,
            description: product.description,
            available: product.available
        }
    })

    return productRegistered;
}