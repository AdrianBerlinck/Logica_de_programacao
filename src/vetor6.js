import leia from "readline-sync"

var vet1 = [];
var vet2 = [];

for (var i = 0; i < 30; i++) {
    var aux1 = Math.floor(Math.random() * 23) + 12
    var aux2 = Math.floor(Math.random() * 23) + 12
    if (aux1 > aux2) {
        vet1[i] = aux2
        vet2[i] = aux1
    } else {
        vet1[i] = aux1
        vet2[i] = aux2
    }
}
for (var i = 0; i < vet1.length; i++) {
    console.log("\nDADOS DO " + (i + 1) + " DIA: ");
    console.log("Minima: " + vet1[i]);
    console.log("Maxima: " + vet2[i]);

}