 const alfabetica = frase => {
	let fraseReordenada = frase.split("").sort().join("");
	return fraseReordenada;
}

console.log(alfabetica("eoiqa"));
