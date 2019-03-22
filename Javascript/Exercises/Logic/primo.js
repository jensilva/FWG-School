
const ehPrimo = numero => {
  for(i=2; i < numero; i++){
    if(numero % i === 0) {
    return false;
    } 
  }
   return true;
}

const primo = ehPrimo(7);

console.log(primo);
