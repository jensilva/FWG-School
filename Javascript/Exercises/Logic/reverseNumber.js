function inverterNumero(numero){
  let numeroInvertido = numero.toString().split("").reverse().join("");
  return Number(numeroInvertido);
}

console.log(inverterNumero(1234));
