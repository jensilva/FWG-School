

function setColor() {
    const colors = ["purple", "aqua", "pink", "yellow", "silver", "steelblue","tomato", "antiquewhite", "coral", "crimson", "burlywood", "darksalmon", "deeppink","deepskyblue"];
    const color = colors[getRandomNumber(colors.length)];
    bcgElement.style = `background-color: ${color}`;
    colorTextElement.innerText = color;
}

setColor(); 

btnColorElement.addEventListener("click", setColor);
