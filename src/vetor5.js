import leia from "readline-sync"

var vet1 = [];


for (var i = 0; i < 10; i++) {
    vet1[i] = leia.questionFloat("INFORME O " + (i + 1) + " NUMERO: ");
}

vet1.reverse();

for(var i = 0 ; i < vet1.length ; i++){
console.log(vet1[i]);
}