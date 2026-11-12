//trocar os valores das variaveis A e B

// declaraçao de variaveis
var A;
var B;

// entrada de dados
A = prompt("digite p valor de A");
B = prompt("digite o valor de B");

console.log("antes")
console.log("O valor de A é : " + A + " , eo valor de B é : " +B);

// processamento
var soma
var aux = A;
A = B;
B = aux;
soma = Number(A) + Number(B)



// saidas
console.log("depois")
console.log("O valor de A é : " + A + ", e o valor de B é : " +B);

console.log("A soma de " + A +" e " + B + " é igual a" + soma)