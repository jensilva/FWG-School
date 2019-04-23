function filter(event){
    const value = event.target.value.toLowerCase();
    const colors = getColors();
    
    if(!value){
        getCubes(colors);
        return;
    }

    const colorsFiltered = colors.map((color) => {
        if(color.name.toLowerCase().includes(value)){
            return color;
        }
    });
    getCubes(colorsFiltered);
}

function edit(colorId){
    window.location.href=`./insert-colors/add-color.html?id=${colorId}`;
}

function getCubes(colors){
    const cubesElement = document.getElementById("color-cubes");
    cubesElement.innerHTML = "";
    
    if(colors){
        for(let i = 0; colors.length > i; i++){
            if(colors[i]){
                cubesElement.innerHTML += `
                    <div class="col-12 col-md-3 mr-3 my-md-4 my-2 cube" style="background-color: ${colors[i].color}"
                        onclick="edit(${colors[i].id})"   >
                    </div> 
                `
            }
        }
    }
}

getCubes(getColors());
