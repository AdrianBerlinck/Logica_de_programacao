import leia from "readline-sync"

var numero =  leia.questionInt("Digite um numero:");

var resto = numero%2

console.log(resto)

switch (resto) {

    case 1:
        console.log("!!!Numero impar!!!");
    break;

    default:
        console.log("!!!Numero par!!!");

}
