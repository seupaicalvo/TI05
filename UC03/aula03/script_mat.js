// operadores matematicos

// soma e subtraçao

  var num1 = 10;
  var num2 = 20;
  var soma;
  var sub;

  soma = num1 + num2
  sub = num1 - num2

  console.log(soma);
  console.log(sub);

  // divisao e multiplicaçao

   var mult,div;

   mult = num1*num2;
   div = num1/num2;

   console.log(mult);
   console.log(div);

   // resto (modulo)
   div = 5 % 2;
   console.log(div);

   
   // exponenciaçao
   var expo = 2 ** 3;

   console.log(expo);

   // incremento

   var A = 4;
   var B = 5;

   A = A + 1;
   A +=1;
   A++;
   //B = ++B * 2;
   console.log(A);
   console.log("valor de B :" + B);

   // decremento

   B = B - 1;
   B -= 1;
   B--;
   console.log(B);

   // operadores de comparaçao

   var C = 5 // = é atribuiçao
   // == comparaçao se A == B
   // === idênticose A === B

   var D = 4;

   console.log(C === D);

   // < > <= >=

   console.log(C > D); // V
   console.log(C < D); // F
   console.log(C >= D); // V
   console.log(C <= D); // F

   // !=

   console.log(C != D);