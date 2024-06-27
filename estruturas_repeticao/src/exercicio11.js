import leia from "readline-sync"

var altura = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var genero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var altura_menor;
var altura_maior;
var contagem_mulheres = 0;
var media_mulheres = 0;
var media_populacao = 0;
var percentual_homens = 0;

for (var i = 0; i < 10; i++) {
    console.log(i + "PESSOA: ");
    altura[i] = leia.questionInt("INFORME A ALTURA (EM CM): ");
    genero[i] = leia.questionInt("INFORME O GENERO (0=masc , 1=fem): ");
    media_populacao += altura[i]
    if (altura_menor == null || altura[i] < altura_menor) {
        altura_menor = altura[i];
    } if (altura_maior == null || altura[i] > altura_maior) {
        altura_maior = altura[i];
    } if (genero[i] === 1) {
        contagem_mulheres++;
        media_mulheres += altura[i];
    }
}

media_mulheres = media_mulheres / contagem_mulheres;
media_populacao = media_populacao / 10;
percentual_homens = 100 - (100 / 10 * contagem_mulheres);
console.log("A MAIOR ALTURA FOI: " + altura_maior + "cm" + "\nA MENOR ALTURA FOI: " + altura_menor + "cm");
console.log("MEDIA DE ALTURA DAS MULHERES: " + media_mulheres);
console.log("MEDIA DE ALTURA DA POPULAÇÃO: " + media_populacao);
console.log("PERCENTUAL DE HOMENS NA POPULAÇÃO: " + percentual_homens + "%");
