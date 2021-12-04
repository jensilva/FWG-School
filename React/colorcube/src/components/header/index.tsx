import React, { useMemo } from "react";
import { getRandomInteger } from "../../utils/numbers";
import { HeaderStyled, HeaderTitle } from "./style";


const getRGBColors = () => [
    getRandomInteger(0,255), // R
    getRandomInteger(0,255), // G
    getRandomInteger(0,255) // B
];


const colors = {
    bgColor: getRGBColors(),
    titleColor: getRGBColors()
}

const Header = () => (   
        <HeaderStyled bgColor={colors.bgColor}>
             <HeaderTitle titleColor={colors.titleColor}>Color Cube</HeaderTitle>
    </HeaderStyled>
)

export default Header;