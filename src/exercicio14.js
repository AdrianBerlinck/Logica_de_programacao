import leia from 'readline-sync'

var opcao = leia.keyInSelect(["pvp", "pve"]) +1;

console.log("escolha:" + opcao)
