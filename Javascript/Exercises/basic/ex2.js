
  /*Escreva um programa que chame o console.log para imprimir do número 1 ao 100, com duas exceções. 
  Para números divisíveis por 3, printe “Fizz” invés do número, e para números divisíveis por 5, printe “Buzz”
 */

  for (let contador = 1; contador <= 100; contador++) {
    if (contador % 3 === 0) {
      console.log("Fizz");
    } else if (contador % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(contador);
    }
  }

