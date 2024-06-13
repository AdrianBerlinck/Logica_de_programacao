import leia from "readline-sync"

var numero_mes = leia.questionInt("Informe o numero do mes: ");


switch (numero_mes){
    case 1:
    case 3:
    case 4:
    case 6:
    case 7:
    case 10:
    case 12:
        console.log("ESSE MES POSSUI 31 DIAS!");
        break;
    case 5: 
    case 8:
    case 9:
    case 11:
        console.log("ESSE MES POSSUI 30 DIAS!");
        break;
    case 2:
        var bissexto = leia.question("ESSE ANO E BISSEXTO? SIM OU NAO:");
        if(bissexto === "sim") {
            console.log("ESSE MES POSSUI 28 DIAS!");
        }else {
            console.log("ESSE MES POSSUI 29 DIAS!")
        }
        break;
}