
  /** Escreva um programa que reprsente uma grade de 8x8, usando quebras de linha. 
A cada “#” deve ter um espaço em branco, como um tabuleiro de xadrez. 
Utilizando o console.log deve ficar como isso: 

# # # #
 # # # # 
# # # #
 # # # # 
# # # #
 # # # # 
# # # #
 # # # #

 */

  for (let linha = 0; linha < 8; linha++) {
    let quadrado = "";

    for (let coluna = 0; coluna < 8; coluna++) {
      if (coluna % 2 == 0) {
        quadrado += " ";
      } else {
        quadrado += "#";
      }
    }
    console.log(quadrado);
  }

