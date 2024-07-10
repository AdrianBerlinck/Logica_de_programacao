/*1) Você está construíndo um algoritmo para verificar se um dado de jogo é viciado ou não.
Você deve “jogar” o dado 1000x (gerar números de 1 até 6) e verificar a quantidade e a
porcentagem de vezes que cada valor é gerado. Caso, algum dos valores seja gerado,
mais de 22% das vezes, você deve dizer que o dado é viciado, caso contrário, dizer que
ele não é viciado.*/

var vet = []
var cNum1 = 0
var cNum2 = 0
var cNum3 = 0
var cNum4 = 0
var cNum5 = 0
var cNum6 = 0

for (var i = 0; i < 1000; i++){
    var aux = Math.floor(Math.random() * 5) + 1;
switch (aux) {
    case 1:
        cNum1++
        break;
    case 2:
        cNum2++
        break;
    case 3:
        cNum3++
        break;
    case 4:
        cNum4++
        break;
    case 5:
        cNum5++
        break;
    case 6:
        cNum6++
        break;

}
}
console.log("O VALOR 1 CAIU: " + cNum1 + " VEZES")
console.log("O VALOR 2 CAIU: " + cNum2 + " VEZES")
console.log("O VALOR 3 CAIU: " + cNum3 + " VEZES")
console.log("O VALOR 4 CAIU: " + cNum4 + " VEZES")
console.log("O VALOR 5 CAIU: " + cNum5 + " VEZES")
console.log("O VALOR 6 CAIU: " + cNum6 + " VEZES")
if(cNum1 > 220 || cNum2 > 220 || cNum3 > 220 || cNum4 > 220 || cNum5 > 220 || cNum6 > 220){
console.log("DADO VICIADO");
}else{
    console.log("ESTE DADO NAO E VICIADO")
}