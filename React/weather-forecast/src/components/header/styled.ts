import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const SearchInput = styled.input ` 
margin-bottom: 15px;
height: 10px;
padding: 5px;
border-radius: 3px;
border-color: #4d4c4c1f;
`;

export const SearchButton = styled.button `
padding: 5px;
font-size: 18px;
font-weight: bold;
text-transform: uppercase;
cursor: pointer;
background-color: #4d4c4c1f;
border: 1px solid #b9b9b9ff;
border-radius: 3px;
`;

export const SearchLabel = styled.label<{
    htmlFor: string;   } >`
font-weight: bold;
font-size: 11px;
`;