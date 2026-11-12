let n1 = prompt("Digite o primeiro número:");
let n2 = prompt("Digite o segundo número:");
let operador = prompt("Digite a operação (+, -, *, /):");

switch (operador) {
    case '+':
        alert(n1 + n2);
        break;
    case '-':
        alert(n1 - n2);
        break;
    case '*':
        alert(n1 * n2);
        break;
    case '/':
        alert(n1 / n2);
        break;
    default:
        alert("Operação inválida");
}