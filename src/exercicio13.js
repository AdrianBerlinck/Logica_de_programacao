import leia from "readline-sync"


var nome_baixa;
var media_estudante;
for (var i = 0; i < 3; i++) {
    var nome = leia.question("\nINFORME O NOME DO ESTUDANTE: ");
    var nota1 = leia.questionFloat("\nINFORME A PRIMEIRA NOTA: ");
    var nota2 = leia.questionFloat("\nINFORME A SEGUNDA NOTA: ");
    var nota3 = leia.questionFloat("\nINFORME A TERCEIRA NOTA: ");
    

    var media_for = (nota1 + nota2 + nota3) / 3;

    if (media_estudante == undefined || media_for < media_estudante) {
        media_estudante = media_for;
        nome_baixa = nome;

    }

}
console.log("\nO ESTUDANTE COM A MEDIA MAIS BAIXA FOI: " + nome_baixa);
console.log("A MEDIA DO MESMO FOI: " + media_estudante);

