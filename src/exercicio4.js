import leia from 'readline-sync';

console.log("QUANTO PRETENDE DOAR?\n");
console.log("Valores:");
console.log("0 = R$10,00");
console.log("1 = R$25,00");
console.log("2 = R$50,00");
console.log("3 = OUTRO VALOR");
var opcao = leia.questionInt();

switch (opcao) {
    case 0:
        console.log("VALOR DOADO: 10 REAIS");
        console.log("OBRIGADO PELA AJUDA\n");
        break;
    case 1:
        console.log("VALOR DOADO: 25 REAIS");
        console.log("OBRIGADO PELA AJUDA\n");
        break;
    case 2:
        console.log("VALOR DOADO: 50 REAIS");
        console.log("OBRIGADO PELA AJUDA\n");
        break;
    default:
        var outro_valor = leia.questionFloat("INFORME O VALOR DESEJADO:");
        console.log("VALOR DOADO: " + outro_valor + " REAIS");
        console.log("OBRIGADO PELA AJUDA\n");
        break;
}