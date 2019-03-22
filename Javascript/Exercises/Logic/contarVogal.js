const countVowel = palavra => {
	let count=0;
	for (let letra of palavra){
		switch(letra){
			case "a":
				count++;
				break;
			case "e":
				count++;
				break;
			case "i":
				count++;
				break;
			case "o":
				count++;
				break;
			case "u":
				count++;
				break;
		}
	}
	return count;
}
console.log(countVowel("Hello"))
