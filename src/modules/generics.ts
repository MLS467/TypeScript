// Generics em TypeScript permitem criar funções, classes ou interfaces que podem trabalhar com diferentes tipos,
// sem precisar especificar o tipo exato no momento da definição. O tipo genérico <T> é um placeholder que será
// substituído por um tipo específico quando a função ou classe for utilizada. Isso proporciona maior flexibilidade
// e reutilização de código, garantindo ao mesmo tempo a segurança de tipos.
// No exemplo abaixo, a função `mostraValor` aceita um parâmetro de qualquer tipo <T> e retorna o mesmo tipo <T>.
export const mostraValor = <T>(x: T): T => {
    console.log(x)
    return x
}