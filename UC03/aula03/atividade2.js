var apple;
var pessoas;
var resto;
var apple_por_pessoa;

var apple = prompt("quantas maças são?");
var pessoas = prompt("quantas pessoas são?");

resto = Number(apple) % Number(pessoas);

apple_por_pessoa = (apple - resto) / pessoas;



console.log("vao ser " + apple_por_pessoa + " por pessoa, e sobrarao " + resto + " maças");




