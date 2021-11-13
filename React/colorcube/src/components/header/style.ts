import styled from "styled-components";


export const HeaderStyled = styled.header<{
    colors: Array<number>
}>`
background-color: rgb(${(props) => props.colors.join(", ")});
text-align: center;
padding: 5px;
border-bottom: 1px solid #c7c7c7;
`;