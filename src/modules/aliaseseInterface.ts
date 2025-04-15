/***
 * Aliases - são nomes alternativos para os módulos, 
 * permitindo que você use nomes mais curtos ou mais significativos em vez
 * de nomes de módulos longos ou complexos.
 */

// ALIASES (criando nosso tipos personalizados)
type AnoVeiculo = number;
type MarcaVeiculo = string;
type ModeloVeiculo = string;

type Carro = {
    ano: AnoVeiculo;
    marca: MarcaVeiculo;
    modelo: ModeloVeiculo;
}

const uno: Carro = { ano: 2020, marca: "Fiat", modelo: "Uno" }
const palio: Carro = { ano: 2018, marca: "Fiat", modelo: "Palio" }
const Ferrari: Carro = { ano: 2021, marca: "Ferrari", modelo: "v8" }