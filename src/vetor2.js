import leia, { questionFloat } from "readline-sync"

var vet1 = []
var soma = 0


for (var i = 0; i < 5; i++) {
    vet1[i] = leia.questionFloat("INFORME O " + (i+1) + " NUMERO: ");
}

for (var i = 0; i < vet1.length; i++) {
    soma += vet1[i];
}

console.log ("SOMA DOS VETORES: " + soma);

for(var i= 0; i < vet1.length; i++){
    console.log("O NUMERO " + (i+1) + ": " +vet1[i]);

}