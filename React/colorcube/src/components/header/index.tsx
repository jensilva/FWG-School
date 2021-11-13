import React from "react";
import { getRandomInteger } from "../../utils/numbers";
import { HeaderStyled } from "./style";

const Header = () => {
    const colors = [getRandomInteger(0,255),getRandomInteger(0,255), getRandomInteger(0,255)];

    return(<HeaderStyled colors={colors}>
         <h1>Color Cube</h1>
    </HeaderStyled>
       
    ) 
}

export default Header;