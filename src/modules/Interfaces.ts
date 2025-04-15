// INTERFACES

interface Retangulo{
    altura: number,
    largura: number
}

const novoItem: Retangulo = {
    altura: 80,
    largura: 60,
}

// EXTENDENDO INTERFACES
interface RetanguloColorido extends Retangulo{
    cor: string
}

export const novoItemColorido: RetanguloColorido = {
    altura: 100,
    largura: 60,
    cor:'azul'
}

