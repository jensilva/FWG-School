const primeiraMaiuscula = frase => {
	let fraseSeparada = frase.split(" ");
	let fraseNova = [];
	for(let i=0; i<fraseSeparada.length; i++){
		let letraMaiuscula = fraseSeparada[i][0].toUpperCase() + fraseSeparada[i].slice(1);
    fraseNova.push(letraMaiuscula);
	}
	 return fraseNova;
}

console.log(primeiraMaiuscula("fwg school"));
