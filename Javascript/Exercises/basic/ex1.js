
  /*Escreva um laço de repetição que chamará 7 vezes o console.log e terá uma saída como essa:
 
            #
            ##
            ###
            ####
            #####
            ######
            #######
            
            Será útil você saber que para descobrir tamanho de uma string você deve escrever .length depois dele.
            let fwg = "FWG";
            console.log(fwg.length); 
            // → 3 */

  for (let contador = "#"; contador.length < 8; contador += "#") {
    console.log(contador);
  }

