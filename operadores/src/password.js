import leia from "readline-sync"

console.log("Password:");
var password =  leia.prompt();

switch (password){

case "1234":
    console.log("Acesso permitido");
    break;

    default:
        console.log("Acesso negado");

}