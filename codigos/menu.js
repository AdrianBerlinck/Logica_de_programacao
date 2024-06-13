import ler from "readline-sync";

var menu = "0"

while (menu != "1" && menu != "2" && menu != "3") {
    console.log("_________MAX BUS_________");
    console.log("MENU DE OPCOES:\n");
    console.log("1-INICIAR ENTRADA");
    console.log("2-RELATÓRIO");
    console.log("3-SAIR");
    menu = ler.prompt();
    console.log("_________________________\n");
}
switch (menu) {
    case "1":
        console.log("valor 1");
        break;
    case "2":
        console.log("valor 2");
        break;
    case "3":
        console.log("valor 3");
        break;

}
