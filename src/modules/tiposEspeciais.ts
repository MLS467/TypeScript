/* TIPOS ESPECIAIS */

// union type - tipos de dados que podem ser usados em uma variável
let myVariable: string | number = "Hello World"; // string | number
myVariable = 42; // number
// myVariable = true; // boolean - erro, pois não é um tipo aceito na variável


// any type - tipo que aceita qualquer valor
let myAnyVariable: any = "Hello World"; // string
myAnyVariable = 42; // number
myAnyVariable = true; // boolean
myAnyVariable = []; // array

/**
 * ALERTA
 * tipo any é um tipo que aceita qualquer valor, 
 * mas não é recomendado o uso dele, pois perde-se a tipagem do TypeScript.
 * não garantir que o valor da variável é do tipo esperado.
 * O ideal é usar o tipo correto para a variável,
 */


// unknown type - tipo que aceita qualquer valor,
// mas não pode ser usado diretamente sem verificação de tipo

let myUnknownVariable: unknown = "Hello World"; // string
myUnknownVariable = 50; // number
// console.log(myUnknownVariable.lenght);
// // erro, pois unknown não tem propriedades definidas

let convertion:string = String(myUnknownVariable); // converte unknown para string
// console.log(convertion.length); // 11


// never type - tipo que nunca deve ser usado

let myNeverVariable: never; // nunca deve ser usado, pois não tem valor definido
// myNeverVariable = 10; // erro, pois nunca deve ser usado


// array - tipo que aceita um array de valores
let myArray: string[] = ['Hello', 'World']; // array de strings
myArray.push('!'); // adiciona um valor ao array
// myArray.push(42); // erro, pois 42 não é do tipo string

/**
 * A palavra-chave 'readonly' (somente leitura) impede que matrizes sejam alteradas.
 */
const myReadOnlyArray: readonly string[] = ['Hello', 'World']; // array de strings somente leitura

// myReadOnlyArray.push('!'); // erro, pois o array é somente leitura


/**
 * inferencia de tipos - o TypeScript infere o tipo da variável automaticamente
 * em array, o TypeScript infere que é um array de strings
 */

let myArray2 = ['Hello', 'World']; // array de strings
myArray2.push('!'); // adiciona um valor ao array

let y: string = myArray2[0]; // string - o TypeScript infere que é uma string


/**
 * tupla - tipo que aceita um array de valores com tipos diferentes
 * exemplo: [string, number, boolean]
 * tupla é um array de valores com tipos diferentes
 * o TypeScript infere que é um array de strings e numbers
 */

let nossaTupla: [string, number, boolean];
nossaTupla = ['5', 42, true]; // tupla de string, number e boolean
nossaTupla.push(5); // adiciona um valor ao array

// boa prática é criar tuplas com readonly, para evitar que sejam alteradas

const nossaTupla2: readonly [string, number, boolean] = ['5', 42, true]; // tupla de string, number e boolean somente leitura
// nossaTupla2.push(5); // adiciona um valor ao array mas como é readonly não pode ser alterada

// objeto é um tipo que aceita um array de valores com tipos diferentes
// exemplo: { name: string, age: number }
// o TypeScript infere que é um objeto com propriedades name e age
const myObject: { name: string, age: number } = {
    name: 'Maisson',
    age: 29
}


// o typescript infere que é um objeto com propriedades name e age
const myObject2 = {
    name: 'Maisson',
    age: 29
}
// myObject2.name = 42; // erro, pois name é do tipo string

// no objeto carro temos um modelo, ano e cor
// mas o ano e a cor são opcionais, pois podem não existir no objeto
// o TypeScript infere que é um objeto com propriedades modelo, ano e cor
const carro: { modelo: string, ano?: number, cor?: string } = {
        modelo: 'Fusca',
}

/* Assinaturas de indices - permite que o TypeScript infira o tipo de um objeto com propriedades dinâmicas
* exemplo: { [key: string]: string }
* o TypeScript infere que é um objeto com propriedades dinâmicas 
*/

const myObject3: { [key: string]: string } = {
    firstname: 'Maisson',
    age: '29'
}

myObject3['lastname'] = 'Silva'; // string - o TypeScript infere que é uma string


export {
    myVariable,
    myAnyVariable,
    myUnknownVariable,
    convertion,
    myArray,
    myArray2,
    y,
    nossaTupla,
    carro,
    myObject3,
}; // Exportando a variável para uso em outros módulos