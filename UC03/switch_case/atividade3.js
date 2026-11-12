let n1 = prompt("Digite o primeiro número:");
let n2 = prompt("Digite o segundo número:");
let opcao = prompt("Escolha uma opção:\n1-Média\n2-Diferença\n3-Produto\n4-Divisão");

switch (opcao) {
    case '1':
        alert((n1 + n2) / 2);
        break;

    case '2':
        alert(n1 - n2);
        break;

    case '3':
        alert(n1 * n2);
        break;

    case '4':
        alert(n1 / n2);
        break;

    default:
        alert("Erro 404, vish deu erro");
        break;
}