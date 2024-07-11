/*2) Você é um professor e está criando um algoritmo para fazer a correção das provas de
maneira automática para você. Primeiro, crie um vetor chamado gabarito com 10
posições e preencha manualmente com as letras das respostas. Depois, solicite, qual é
as respostas do aluno. Por fim, verifique quantas estão corretas e gere a nota.*/

import leia from "readline-sync"

var vet = [];
var vet_aluno = [];
var nota = 10;
console.log("_____GABARITO_____");
for (var i = 0; i < 10; i++) {
    vet[i] = leia.question("INFORME A RESPOSTA CORRETA DA QUESTAO " + (i + 1) + ": ");
    
}
console.log("\nINFORME AS NOTAS DO ALUNO: ");
for (var i = 0; i < vet.length; i++) {
    vet_aluno[i] = leia.question("QUESTAO " + (i + 1) + ": ");

} 
var nota = vet.length;
for (var i = 0; i < vet.length; i++) {
    if (vet[i] != vet_aluno[i]) {
        nota--;
        console.log("QUESTAO " + (i+1) + " ERRADA");
    }
}
console.log("_____________\nNOTA FINAL: " + nota);

