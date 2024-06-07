import leia from "readline-sync";

var quant_macas = leia.questionInt("Quantidade de macas compradas:");
var valor_macas

switch (quant_macas){
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
    valor_macas =0.30
break;

default:
    valor_macas =0.25

}
console.log(valor_macas)
console.log("Valor total: R$"+ (quant_macas*valor_macas))