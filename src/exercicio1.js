import leia from "readline-sync";

var salario = leia.questionFloat("Informe o valor do salario:");
var emprestimo = leia.questionFloat("Informe o valor do emprestimo:");
var prestacoes = leia.questionInt("Tnumero de parcelas:");

var valor_parcela = (emprestimo / prestacoes);
var maximo_parcela = (salario * 0.3);

if (valor_parcela <= maximo_parcela) {
    console.log("Emprestimo liberado!");
} else {
    console.log("Emprestimo negado!");
}