import leia from "readline-sync"

var numeral = "";
var pai = [];
var mae = [];
var filho = [];
var parpai = [];
var imparmae = [];
var contfilho = 0;
for (var i = 0; i < 50; i++) {
    pai[i] = Math.floor(Math.random() * 100);
    mae[i] = Math.floor(Math.random() * 100);

}for(var i = 0 ; i < 50; i++){
 if(i%2==0){
    filho[i] = pai[i];

 }else{
    filho[i] = mae[i];
 }
}
for(var i = 0; i <=50; i++){
   numeral += " " + i 
}
console.log("       " + numeral + " ");
console.log("PAI:   " + pai);
console.log("MAE:   " + mae +"\n");
console.log("       " + numeral + " ");
console.log("FILHO: " + filho + "\n");
