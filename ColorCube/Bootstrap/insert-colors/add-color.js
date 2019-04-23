function isNewColor(){
    const params = window.location.search.substr(1).split("=");
    return params.length <= 1;
}

function getIdParam(){
    const params = window.location.search.substr(1).split("=");
    return Number(params[1]);
}

function setInputColor(){
    const picker = document.getElementById("color-picker").value;
    document.getElementById("color-code").value = picker.toUpperCase();
}

function goHome(){
    window.location.href = "../index.html";
}

function cancel(event){
    event.preventDefault();
    const canceled = confirm("Você realmente quer cancelar?");
    if(canceled){
        goHome();
    }
}

function save(event){
    event.preventDefault();    

    const colorValue = document.getElementById("color-picker").value;
    const name = document.getElementById("color-name").value;

    if(colorValue.length > 0 && name.length > 0){
        const color = {
            name,
            color: colorValue
        }

        if(isNewColor()){
            pushColor(color, true);
        }else{
            editColor(color,getIdParam(),true);
        }
        goHome();
    }
    
}

function getForm(){
    let title = "Cadastrar Cor";
    if(!isNewColor()){
        const colors = getColors();
        const color = colors.find((color) => color.id === getIdParam());
        if(color){
            title = "Editar Cor";
            document.getElementById("color-picker").value = color.color;
            document.getElementById("color-name").value = color.name;
        }else{
            window.location.href="./insert-colors/add-color.html"
        }
    }
    document.getElementById("title").innerHTML = title;
}

getForm();
setInputColor();
