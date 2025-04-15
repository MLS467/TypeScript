// Tipos Simples
// string, number, boolean, null, undefined

// string: texto
const nome: string = "Maisson";

// number: número
const numero:number = 5.5

// boolean: verdadeiro ou falso
const ativo:boolean = true

// null: ausência de valor
const nulo: null = null

// undefined: variável não definida
const indefinido: undefined = undefined

// Explícito
// implícito

//Explícito: quando o tipo é definido na declaração da variável
let nome2: string = "Maisson";
// nome2 = 50; // Erro: Type 'number' is not assignable to type 'string'.
// console.log(nome2);


// Implicíto: quando o tipo é definido automaticamente pelo TypeScript
let nome3 = "Maisson";
// nome3 = 50; // Erro: Type 'number' is not assignable to type 'string'.
// console.log(nome3);


// Exportando os tipos simples
export { nome, numero, ativo, nulo, indefinido };