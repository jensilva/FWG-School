import React, {useEffect, useState} from "react";
import { filter, noop } from "lodash";
import { colors } from "./colors.mock";
import { Props } from "./type";

const Search = (props: Props) => {
    const {onSearch = noop} = props;

    const [searchValue, setSearchValue] = useState(""); // Hooks (primeiro parametro, getter segundo setter)

    useEffect(() => { //apenas quando há alteração de valor
        const filteredColor = filter(colors,(color) => color.name.toLowerCase().includes(searchValue.toLowerCase()));
        onSearch(filteredColor);
        console.log("A variavel searchValue mudou troxa:", filteredColor)
    }, [searchValue]);

return <input value={searchValue} onChange= {(e) => {setSearchValue(e.target.value)}} />

}


/* PROPS OPCIONAL OU NOOP DO LODASH

Search.defaultProps = {
    onSearch: noop
}
*/

export default Search;