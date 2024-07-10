/*1) Crie 3 vetores de 9 posições e crie outro com o 1º terço do
primeiro, o segundo 3º. do segundo e o último terço do 3º.
Escrever o vetor resultante ao final.*/

import leia from "readline-sync"

var vet1 = [];
var vet2 = [];
var vet3 = [];
var vetr = [];

for (var i = 0; i < 9; i++) {
vet1[i] = Math.floor(Math.random() * 100);
vet2[i] = Math.floor(Math.random() * 100);
vet3[i] = Math.floor(Math.random() * 100);
}for (var i = 0; i < 3; i++) {
    vetr[i]=vet1[i];
}for (var i = 3; i < 6; i++) {
    vetr[i]=vet2[i];
}for (var i = 6; i < 9; i++) {
    vetr[i]=vet3[i];
}
console.log("VETOR 1: " + vet1);
console.log("VETOR 2: " + vet2);
console.log("VETOR 3: " + vet3);
console.log("VETOR R: " + vetr);