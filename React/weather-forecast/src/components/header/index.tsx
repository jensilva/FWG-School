import React, {useState} from "react";
import { noop } from "lodash";
import { Props } from "./types";
import { Container, SearchInput, SearchButton, SearchLabel} from './styled'

const Header = (props: Props) => {
    
    const [city, setCity] = useState("");

    return (
            <Container>
                <h1>Weather Forecast</h1>
                <SearchLabel htmlFor="search-input">Search by City</SearchLabel>
                <SearchInput 
                id="search-input"
                type="text" value={city} 
                onChange={(e) => {
                    setCity(e.target.value)
                }
                } />
                <SearchButton onClick={() => props.onSearch(city)}>Search</SearchButton>
            </Container>
            
    )
}

Header.defaultProps = {
    onSearch: noop
}
export default Header;