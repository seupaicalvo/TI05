let codigo = prompt("Digite o código do produto:");
let quantidade = prompt("Digite a quantidade:");
let total;

switch (codigo) {
    case '100':
        total = quantidade * 1.70;
        break;

    case '101':
        total = quantidade * 2.30;
        break;

    case '102':
        total = quantidade * 2.60;
        break;

    case '103':
        total = quantidade * 2.40;
        break;

    case '104':
        total = quantidade * 2.50;
        break;

    case '105':
        total = quantidade * 1.00;
        break;

    default:
        alert("Código inválido");
        break;
}