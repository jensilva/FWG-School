function palindromo(frase){
  let fraseSemEspacos = frase.split(" ").join("").toLowerCase();
  let fraseInvertida = fraseSemEspacos.split("").reverse().join("");
  if(fraseSemEspacos == fraseInvertida) {
    return true;
  } else {
    return false;
  }
} 

console.log(palindromo("acuda cadela da leda caduca"));
