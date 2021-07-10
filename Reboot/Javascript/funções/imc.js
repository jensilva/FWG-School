const altura = 1.55
const peso = 55

console.log(`
Peso: ${peso}
________________
altura: ${altura} *2 
`)

function calculeIMC(peso, altura){
    let imc = peso / (altura ** 2)
    return imc;
}

let showIMC = calculeIMC(peso, altura);

console.log(showIMC)