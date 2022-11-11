// colocar parcelas até 12x, porém, a partir da 7 parcela, aplicar 1% de juros ao mês.
// formula M=valor da compra*(1+taxa de juros)**parcelas
const valorCompra = 100;
const numerodeParcela = 7;
const taxaDeJuros = 0.01

if (numerodeParcela === 1) {
    //a vista com desconto
    const compraComDesconto = valorCompra * 0.9;
    console.log(`Pagará R$ ${compraComDesconto}, pois tem 10% de desconto à vista.`);
} else if (numerodeParcela >= 7 && numerodeParcela <= 12) {
    const valorParcelaComJuros = (valorCompra * (1 + taxaDeJuros) ** numerodeParcela).toFixed(2);
    const parcelaComJuros = (valorParcelaComJuros / numerodeParcela).toFixed(2);
    console.log(`Dividindo em ${numerodeParcela}x de R$ ${parcelaComJuros} totalizando ${valorParcelaComJuros}, deivido incidência de juros.`);
} else if (numerodeParcela >= 2 && numerodeParcela <= 6) {
    const valorPorParcela = (valorCompra / numerodeParcela).toFixed(2);
    console.log(`Dividindo em ${numerodeParcela}x de R$ ${valorPorParcela}.`);
} else {
    console.log("Número de parcelas não aceita.")
}     