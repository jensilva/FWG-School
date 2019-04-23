function saveColor(colors){
    const stringColors = JSON.stringify(colors);
    localStorage.setItem("colors", stringColors);
}

function getColors(){
    const colors = JSON.parse(localStorage.getItem("colors"));
    return colors || [];
}

function editColor(newColor, id, needsSave){
    const colors  = getColors();
    const oldColorIndex = colors.findIndex((color) => color.id === id);
    if(oldColorIndex !== -1){
        colors[oldColorIndex] = {
            ...colors[oldColorIndex],
            ...newColor
        };
        if(needsSave){
            saveColor(colors);
        }
        return colors;
    }else{
        throw "Id não encontrado."
    }
}

function pushColor(color, needsSave, id){
    const colors = getColors();
    color.id = colors.length;
    colors.push(color);

    if(needsSave){
        saveColor(colors,id);
    }

    return colors;
}

