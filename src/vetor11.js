/*4) Crie uma matriz 8x8 com números aleatórios e posteriormente
escreva na tela, quais são maiores que 10;*/

var matriz = [[]];

for (var i = 0; i < 8; i++) {
    matriz[i] = [];
    for (var j = 0; j < 8; j++) {
        matriz[i][j] = Math.floor(Math.random() * 20);

    }
}
console.table(matriz)
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
       if(matriz[i][j] > 10 ){
        console.log("MAIOR QUE 10: " + matriz[i][j]);
       }
        
    }
}