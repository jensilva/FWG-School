function add (...numbers){
    resultadoAd = 0
    for ( i=0; i<numbers.length; i++) {
        resultadoAd = resultadoAd + numbers[i];
      
    }
    console.log("Adição",resultadoAd);
    return resultadoAd;
}

add(5,8,7);


function sub (...numbers){
    resultadoSub = numbers[0]
    for ( i=0; i<numbers.length; i++) {
        resultadoSub -= numbers[i];
      
    }
    console.log("Subtração", resultadoSub);
}

sub(20,5,5);


function div (...numbers){
    resultadoDiv = numbers[0]
    for ( i=0; i<numbers.length; i++) {
        resultadoDiv = resultadoDiv / numbers[i];
      
    }
    console.log("Divisão",resultadoDiv);
}


div(10,2)


function mult (...numbers){
    resultadoMult = numbers[0] 
    for ( i=1; i<numbers.length; i++) {
        resultadoMult *= numbers[i];
      
    }
    console.log("Multiplicação",resultadoMult);
}

mult(3,5)