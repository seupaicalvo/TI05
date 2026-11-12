 var nota_1, nota_2, media;
 var resultado;
 
 
 nota_1 = Number(prompt("digite a primeira nota"));
 nota_2 = Number(prompt("digite sua segunda nota"));

 media = (nota_1 + nota_2) / 2;

 if(media >= 7){
    resultado = "aprovado";
 }else{
    resultado = "reprovado";
 }

 console.log("sua média é: " + media + ", e você foi " + resultado)