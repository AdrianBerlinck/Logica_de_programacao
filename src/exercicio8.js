import leia from "readline-sync"
var numero = [1, 2, 3, 4, 5, 6];
var soma = 0;
var mult = 1;
for (var i = 1; i <= 6; i++) {
    numero[i] = leia.questionInt("INFORME UM NUMERO INTEIRO E POSITIVO: ");
}
for (var i = 1; i <= 6; i++) {
    if (numero[i] % 2 == 0) {
        mult *= numero[i];
    } else {
        soma += numero[i];
    }
}
console.log("\nSOMA DOS NUMERO IMPARES: " + soma);
console.log("MULTIPLICAÇÃO DOS NUMEROS PARES:" + mult);
for (var i = 1; i <= 6; i++) {
    console.log("VALOR " + i + ": " + numero[i]);
}
