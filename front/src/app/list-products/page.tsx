import "./styles.css"
import { convertValueToBrl } from "../utils/conversion";
import { fetchListOfProducts } from "../utils/fetchListOfProducts";
import Link from "next/link";

type Product = {
    id: number,
    name: string,
    description: string,
    value: number,
    available: boolean
}
export default async function Home() {
    const listOfProducts = await fetchListOfProducts();

    return (
        <main>
            <div>
                <Link id="redirect-register-new-product" href="/">
                    Cadastrar novo produto
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listOfProducts.map((product: Product) => (
                            <tr>
                                <td scope="row">
                                    {product.name}
                                </td>
                                <td>
                                    {convertValueToBrl(product.value)}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    );
}
