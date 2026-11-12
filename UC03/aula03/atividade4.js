var produto;
var desconto;
var valor;

var produto = prompt("qual é o valor do produto?");
var desconto = prompt("qual será o desconto que vai receber?");

valor = (produto - desconto);

console.log("o produto custa " + produto + " mas com o desconto de " + desconto + " o valor muda para " + valor );

