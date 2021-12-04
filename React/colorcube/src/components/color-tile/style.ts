import styled from "styled-components";
import { ColorRGB } from "../../types/color";
import { rgbToHex } from "../../utils/color";

export const Tile = styled.div<{
bgColor: string | ColorRGB
}>` 
width: 160px;
height: 160px;
margin: 15px 15px;
border: 1px solid #c7c7c7;
background-color: ${({bgColor}) => typeof bgColor === "string" ? bgColor: rgbToHex(...bgColor)};
cursor: pointer;

`