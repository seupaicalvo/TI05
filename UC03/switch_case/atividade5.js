let mes = prompt("Digite o número do mês (1 a 12):");

switch (mes) {
    case '12':
    case '1':
    case '2':
        alert("Verão");
        break;

    case '3':
    case '4':
    case '5':
        alert("Outono");
        break;

    case '6':
    case '7':
    case '8':
        alert("Inverno");
        break;

    case '9':
    case '10':
    case '11':
        alert("Primavera");
        break;

    default:
        alert("Mês inválido");
        break;
}