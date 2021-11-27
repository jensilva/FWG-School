import styled from "styled-components";


const getRGB = (colors: Array<number>) => colors.join(", ")


export const HeaderStyled = styled.header<{
    bgColor: Array<number>
}>`
background-color: rgb(${({bgColor}) => getRGB(bgColor)});
text-align: center;
padding: 5px;
border-bottom: 1px solid #c7c7c7;
`;

export const HeaderTitle = styled.h1<{
    titleColor:Array<number>
}> ` 
font-size: 25px;
text-transform: uppercase;
background-color: rgb(${({titleColor}) => getRGB(titleColor)});
`


   
