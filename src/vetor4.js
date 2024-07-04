import leia from "readline-sync"

var vet1 = []

for (var i = 0; i < 15; i++) {
    vet1[i] = leia.questionFloat("INFORME O " + (i + 1) + " NUMERO: ");
} for (var i = 0; i < vet1.length; i++){
    if(vet1[i] >=10){
        console.log("O "+ (i+1) +" NUMERO E MAIOR OU IGUAL A 10: " + vet1[i]);
    }
}

