
function setColor() {
    const colors = "0123456ABCDEF";
    const hexAvailableLenght = "368";
    const maxHexLenght = hexAvailableLenght[getRandomNumber(hexAvailableLenght.length)];
    let color = "#";

    for(let i = 0; i < maxHexLenght; i++){
        color += colors[getRandomNumber(colors.length)]
    }
    
    bcgElement.style = `background-color: ${color}`;
    colorTextElement.innerText = color;
}

setColor(); 

btnColorElement.addEventListener("click", setColor);
