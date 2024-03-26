
export const convertValueToBrl = (value: number) => {
    return (value / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}