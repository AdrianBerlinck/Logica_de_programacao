import leia from 'readline-sync';

var adicional = 0
var nome_colaborador = leia.question("INFORME O NOME DO COLABORADOR:");
var salario_fixo = leia.questionFloat("INFORME O SALARIO FIXO DO COLABORADOR:");
var dependentes = leia.questionInt("INFORME A QUANTIDADE DE DEPENDENTES:");

switch (dependentes) {
    case 0:
        adicional = 0.02;
        break;
    case 1:
        adicional = 0.05;
        break;
    case 2:
        adicional = 0.07;
        break;
    case 3:
        adicional = 0.1;
        break;
    default:
        adicional = 0.15;
        break;
}
var salario_bruto = salario_fixo + (Number(adicional)*salario_fixo);

console.log("SALARIO FINAL: R$" + salario_bruto);