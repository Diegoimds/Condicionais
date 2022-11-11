const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComOsPais = true;

// tem ingresso E
// tem idade maior ou igual a censura OU está com os pais

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar, ótimo filme!");
    } else {
        console.log("Não pode entrar!");
    }
} else {
    console.log("Barrada.");
}