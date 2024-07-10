/*2) Crie um algoritmo que gere um vetor com 10 itens, depois
disso, você deve percorrer a lista e verificar se existe algum
valor duplicado.
*/

import leia from "readline-sync"


var vet = [];

for (var i = 0; i < 10; i++) {
    vet[i] = Math.floor(Math.random() * 100);
}console.log(vet)

for (var i = 0; i < vet.length; i++) {
    for (var j = (i + 1); j < vet.length ; j++) {

        if (vet[i] == vet[j]) {
            console.log("NUMERO DUPLICADO: " + vet[i]);
           
        }
    }
}

