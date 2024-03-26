'use client'
import "./styles.css"
import { useRouter } from 'next/navigation'
import { ChangeEventHandler, FormEventHandler, useState } from "react";


import { api } from "@/lib/axios";
import { submitRegisterProduct } from "@/app/utils/submitForm";

type Product = {
    name: string,
    description: string,
    value: number,
    available: string,
}

const productDefault = {
    name: "",
    description: "",
    value: 0,
    available: '',
}

type ErrorMessage = {
    name: string,
    description: string,
    value: string,
    available: string,
}

const errorMessageDefault = {
    name: "",
    description: "",
    value: "",
    available: ""
}

export default function RegisterProduct() {
    const [productRegistered, setProductRegistered] = useState<Product>(productDefault)
    const [inputErrorMessage, setInputErrorMessage] = useState<ErrorMessage>(errorMessageDefault)
    const router = useRouter()
    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        if (productRegistered.name === '') {
            return setInputErrorMessage({
                ...errorMessageDefault,
                name: "O nome do produto é obrigatório"
            })
        }
        if (productRegistered.description === '') {
            return setInputErrorMessage({
                ...errorMessageDefault,
                description: "A descrição do produto é obrigatório"
            })
        }
        if (productRegistered.value == null || productRegistered.value == 0) {
            return setInputErrorMessage({
                ...errorMessageDefault,
                value: "O valor do produto é obrigatório"
            })
        }
        if (productRegistered.available === '') {
            return setInputErrorMessage({
                ...errorMessageDefault,
                available: "Selecione se o produto está disponível ou não"
            })
        }
        setInputErrorMessage(errorMessageDefault)

        const dataToBeSent = {
            name: productRegistered.name,
            description: productRegistered.description,
            value: (Number(productRegistered.value) * 100),
            available: productRegistered.available === 'true' ? true : false,
        }

        try {
            submitRegisterProduct(dataToBeSent)
            router.push('/list-products')
        } catch (error: any) {
            return alert(error.response.data)
        }
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
                Nome do produto*
                <input
                    type="text"
                    name="name"
                    id="product-name"
                    value={productRegistered.name}
                    onChange={handleChangeValue}
                />
                <span>
                    {inputErrorMessage.name}
                </span>
            </label>
            <label htmlFor="product-description">
                Descrição do produto*
                <input
                    type="text"
                    name="description"
                    id="product-description"
                    value={productRegistered.description}
                    onChange={handleChangeValue}
                />
                <span>
                    {inputErrorMessage.description}
                </span>
            </label>
            <label htmlFor="product-value">
                Valor do produto*
                <input
                    type="number"
                    name="value"
                    id="product-value"
                    min={0}
                    step={0.01}
                    value={productRegistered.value}
                    onChange={handleChangeValue}
                />
                <span>
                    {inputErrorMessage.value}
                </span>
            </label>
            <label htmlFor="product-available">
                Produto disponível*:
                <select
                    name="available"
                    id="product-available"
                    onChange={handleChangeValue}
                >
                    <option value=""> Selecione uma opção </option>
                    <option value="true"> Sim </option>
                    <option value="false"> Não </option>
                </select>
                <span>
                    {inputErrorMessage.available}
                </span>
            </label>

            <button>
                Cadastrar produto
            </button>
        </form>
    )
}