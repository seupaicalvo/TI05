var valor
var pessoas
var desconto
var conta

var valor = prompt("qual valor da conta")
var pessoas = prompt("quantas pessoas estão na mesa?")
var desconto = prompt("desconto por cada pessoa")

conta = (valor / pessoas - desconto)

console.log("a conta ficou de " + conta + " para cada pessoa na mesa")
