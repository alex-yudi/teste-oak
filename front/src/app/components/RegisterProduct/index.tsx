'use client'
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import "./styles.css"

type Product = {
    name: string,
    description: string,
    value: number,
    available: boolean,
}

const productDefault = {
    name: "",
    description: "",
    value: 0,
    available: false,
}

export default function RegisterProduct() {
    const [productRegistered, setProductRegistered] = useState<Product>(productDefault)

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(productRegistered)
    }

    const handleChangeValue: ChangeEventHandler<HTMLInputElement> & ChangeEventHandler<HTMLSelectElement> = (e) => {
        const { target: { name, value }, } = e;

        setProductRegistered({
            ...productRegistered,
            [name]: value
        })
    }

    return (
        <form className="form-register-product" onSubmit={handleSubmit}>
            <h3>
                Cadastro de novo produto
            </h3>
            <label htmlFor="product-name">
                Nome do produto
                <input
                    type="text"
                    name="name"
                    id="product-name"
                    value={productRegistered.name}
                    onChange={handleChangeValue}
                />
            </label>
            <label htmlFor="product-description">
                Descrição do produto
                <input
                    type="text"
                    name="description"
                    id="product-description"
                    value={productRegistered.description}
                    onChange={handleChangeValue}
                />
            </label>
            <label htmlFor="product-value">
                Valor do produto
                <input
                    type="number"
                    name="value"
                    id="product-value"
                    value={productRegistered.value}
                    onChange={handleChangeValue}
                />
            </label>
            <label htmlFor="product-available">
                Produto disponível:
                <select
                    name="available"
                    id="product-available"
                    onChange={handleChangeValue}
                >
                    <option value=""> Selecione uma opção </option>
                    <option value="true"> Sim </option>
                    <option value="false"> Não </option>
                </select>
            </label>

            <button>
                Cadastrar produto
            </button>
        </form>
    )
}