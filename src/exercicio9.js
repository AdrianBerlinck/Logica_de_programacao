import leia from "readline-sync"
var num = 0;
while (aux !== 0) {
    var aux = leia.questionFloat("INFORME UM NUMERO (PARAR = 0): ");
    if (aux > 100 && aux < 200) {
        num++
    }
}
console.log(num + " NUMEROS FORAM INFORMADOS ENTRE 100 E 200");


