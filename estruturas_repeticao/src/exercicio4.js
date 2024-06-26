import leia from "readline-sync"

var menor;
var maior;
for (var i = 1; i <= 15; i++) {
    var aux = leia.questionInt("INFORME O " + i + " VALOR:");
    if (i == 1 || aux > maior) {
        maior = aux;
    }
    if (i == 1 || aux < menor) {
        menor = aux;
    }
}

console.log("O MAIOR NUMERO FOI:" + maior + "\nO MENOR NUMERO FOI: " + menor);






