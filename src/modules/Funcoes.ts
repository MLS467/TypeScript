/**
 * Funções em TypeScript
 * Funções são blocos de código que podem ser reutilizados em diferentes partes do programa.
 * Elas podem receber parâmetros e retornar valores.
 * As funções podem ser declaradas de várias maneiras, incluindo funções nomeadas, funções anônimas e funções de seta (arrow functions).
 * As funções também podem ter tipos de retorno e tipos de parâmetros.
 * Neste exemplo, vamos criar algumas funções simples em TypeScript.
 */

// Função que retorna a soma de dois números
// A função soma recebe dois parâmetros x e y do tipo number e retorna um número.
// A função é exportada para que possa ser utilizada em outros módulos.
export const getHourNow = (): number => {
    return Date.now()
}


// Função que retorna a soma de dois números
// A função soma recebe dois parâmetros x e y do tipo number e retorna um número.
// A função é exportada para que possa ser utilizada em outros módulos.
export const soma = (x: number, y: number): number => {
    return x + y
}

// Função que retorna a soma de três números
// A função somaTresValores recebe três parâmetros x, y e z do tipo number e retorna um número.
// O parâmetro z é opcional, ou seja, pode ser passado ou não. Se não for passado, o valor padrão será 0.
export const somaTresValores = (x: number, y: number, z?:number): number => {
    return x + y + (z || 0)
}

// interface Dados descrição dos dados que serão utilizados na função mostraDados
// sendo tipados os dados que serão utilizados na função mostraDados
interface dados {
    nome: string,
    idade: number,
    ativo: boolean,
    altura:number
}

// Função que exibe os dados na tela
// A função mostraDados recebe um parâmetro dados_ do tipo dados e não retorna nada (void).
// A função utiliza console.table para exibir os dados em formato de tabela no console.
export const mostraDados = (dados_: dados): void => {
    console.table(dados_)
}

// Criação de um objeto dadosUsuario do tipo dados
// O objeto dadosUsuario contém as propriedades nome, idade, ativo e altura com seus respectivos valores.
// O objeto é exportado para que possa ser utilizado em outros módulos.
// O objeto dadosUsuario é um exemplo de como os dados podem ser passados para a função mostraDados.
// O objeto dadosUsuario é do tipo dados, que foi definido anteriormente como uma interface.
export const dadosUsuario:dados = {
    nome: 'Maisson',
    idade: 29,
    ativo: true,
    altura:1.7
}

