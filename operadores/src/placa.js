import leia from "readline-sync";

console.log("Insira a placa do veículo:");
var placa = leia.prompt();

var trecho = placa.substring(5,6);

console.log(trecho);
switch (trecho){
case '0':
case '1':
    console.log("Não pode rodar na segunda");
break;
case '2':
case '3':
    console.log("Não pode rodar na terça");
break;
case '4':
case '5':
    console.log("Não pode rodar na quarta");
break;
case '6':
case '7':
    console.log("Não pode rodar na quinta");
break;

default:
    console.log("Não pode rodar na sexta");


}
