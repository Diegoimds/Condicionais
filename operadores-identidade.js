//Verifica não só o conteudo, mas também o tipo que está sendo identificado.
const ehIdentico = 18 === 18; // true
//const ehIdentico = 18 === "18"; // false
const ehTotaldiferente = 18 !== "19"; // true
//const ehTotaldiferente = 18 !== 18; // false
//Podendo usar com variáveis, não somente com números pré determinados.
console.log(ehIdentico);
console.log(ehTotaldiferente);