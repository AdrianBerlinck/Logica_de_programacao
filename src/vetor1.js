import leia from "readline-sync"

var vet1 = []
var vet2 = []


for (var i = 0; i <10; i++){
vet1[i] = leia.questionFloat("INFORME O " + (i+1) + " NUMERO: ");
}
console.log( "VETOR 1: " + vet1);

for(var i = 0; i < 10; i++){
    vet2[i] = vet1[i]* 5
}
console.log("VETOR 2: " + vet2);
