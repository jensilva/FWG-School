const btnEnviarMagicNumber = document.getElementById("btn-enviar-tentativa");
const inputMagicNumber = document.getElementById("tentativa");
const tryList = document.getElementById("lista-tentativas");
const attemptEl = document.getElementById("max-attempt");
const mainContainer = document.querySelector("body");
const maxAttempt = 10;
let attempt = 0;
const maxSecretNumber = 100;
const minSecretNumber = 1;
let secretNumber = Math.round(Math.random() * (maxSecretNumber - minSecretNumber) + minSecretNumber);

attemptEl.innerText = maxAttempt;

/* 
const tipEl = getElementById("tip");
tipEl.innerHTML = `Dica: o numero está entre ${minSecretNumber} e ${maxSecretNumber}` 
*/

btnEnviarMagicNumber.addEventListener("click", function() {
    attempt++;
    attemptEl.innerHTML = maxAttempt - attempt;

    const tentativa = Math.floor(+inputMagicNumber.value);
    inputMagicNumber.value = "";
    inputMagicNumber.focus();
  //  tryList.innerHTML += `<li>${tentativa}</li>`
    const tryItemElement = document.createElement("li");
    tryItemElement.innerHTML = tentativa;
    if(tentativa > secretNumber) {
        tryItemElement.classList.add("higher-number"); 
    } else if (tentativa < secretNumber) {
        tryItemElement.classList.add("lowest-number");
    } else {
        const winnerTitle = document.createElement("h2");
        winnerTitle.innerText = "Você Ganhou!";
        tryItemElement.classList.add("correct-number");
        mainContainer.append(winnerTitle);
     

        btnEnviarMagicNumber.setAttribute("disabled", true);

        const retryButton  = document.createElement("button");
        retryButton.innerText = "Tentar novamente";
        mainContainer.append(retryButton);

        retryButton.addEventListener("click", function() {
            //limpar variaveis
            winnerTitle.remove();
            retryButton.remove();
            tryList.innerHTML = "";
            attempt = 0;
            attemptEl.innerHTML = maxAttempt;
            btnEnviarMagicNumber.removeAttribute("disabled");
            secretNumber = Math.round(Math.random() * (maxSecretNumber - minSecretNumber) + minSecretNumber);
        })
    }

    tryList.append(tryItemElement)

    if(attempt >= 10) {
        btnEnviarMagicNumber.setAttribute("disabled", true);
        const loserTitle = document.createElement("h2");
        loserTitle.innerText = "Você Perdeu!";
        mainContainer.append(loserTitle);

        const retryButton  = document.createElement("button");
        retryButton.innerText = "Tentar novamente";
        mainContainer.append(retryButton);

        retryButton.addEventListener("click", function() {
            //limpar variaveis
            loserTitle.remove();
            retryButton.remove();
            tryList.innerHTML = "";
            attempt = 0;
            attemptEl.innerHTML = maxAttempt;
            btnEnviarMagicNumber.removeAttribute("disabled");
            secretNumber = Math.round(Math.random() * (maxSecretNumber - minSecretNumber) + minSecretNumber);
        })
    }
    
console.log(secretNumber);

})

