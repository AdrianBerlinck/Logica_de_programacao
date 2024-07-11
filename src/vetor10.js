/*3) Criar um vetor de 4 posições e solicitar ao usuário que forneça
4 números pares para armazenar nele. Caso o usuário digite
um número ímpar, o algoritmo deve avisar e solicitar um novo
valor.
*/
import leia from "readline-sync"

var vet = []

console.log("INFORME 4 NUMEROS PARES: ");
for(var i = 0; i < 4; i++){
vet[i]= leia.questionInt();
}for(var i = 0; i < vet.length; i++){
    if(vet[i]%2 !==0){
        while(vet[i]%2 != 0){
vet[i] = leia.questionInt("O " + (i+1) + " NUMERO NAO E PAR, valor atual: "+ vet[i] + ". DIGITE NOVAMENTE: ");
}

}

}
