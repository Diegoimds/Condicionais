// caso page à vista terá 10% de desconto
// caso queira parcelar, 6x sem juros, sem desconto
// imprimir como ele terá que pagar, incluindo valor da parcela
// .toFixed([quantidade de digitos que deseja]), usado para limitar a quantidade de decimais.
const valorCompra = 100;
const numerodeParcela = 2;


if (numerodeParcela === 1) {
    const compraComDesconto = valorCompra * 0.9;
    console.log(`Pagará R$ ${compraComDesconto}, pois tem 10% de desconto à vista.`);
} else {
    const valorPorParcela = (valorCompra / numerodeParcela).toFixed(2);
    console.log(`Dividindo em ${numerodeParcela} voce deve pagar R$ ${valorPorParcela}.`);
}