const maiorPalavra = frase => {
	let maior = "";
	let palavras = frase.split(" ");
	for(i=0; i < palavras.length; i++){
		if(maior.length < palavras[i].length){
			maior = palavras[i]
		}
	}
	
	return maior;
}

console.log(maiorPalavra("fwg school"));
