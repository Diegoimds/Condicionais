const temIngresso = true;
const censura = 16;
const idade = 13;
// ter ingresso e ser maior ou igual que 16 anos
// caso não tenha ingresso, vá comprar
// caso não tenha idade e tem o ingresso, não poderá entrar
// caso não tenha idade e não tem ingresso, não poderá comprar e nem entrar

if (idade >= censura) {
    if (temIngresso === true) {
        console.log("Pode entrar, ótimo filme!");
    } else {
        console.log("Vá comprar o ingresso!");
    }
} else {
    console.log("Você não tem idade para este filme!");
}

//if (temIngresso === True){
//   if (idade >= censura){
//        console.log("Pode entrar");
//   }else{
//    console.log("Barrada pela censura.");
//   }
//} else {
//    console.log("Barrada por falta de ingresso")
//}