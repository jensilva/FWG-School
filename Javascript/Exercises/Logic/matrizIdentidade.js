const matrizIdentidade = numero =>{
	let matriz = "";
	for(coluna=0; coluna<numero;coluna++){
		for(linha=0; linha<numero; linha++ ){
			matriz += linha===coluna ? "1":"0";
		}
		 matriz+="\n";
	}
	return matriz;
}

console.log(matrizIdentidade(4));
