import React, { useCallback, useState } from "react";
import { Props } from "./types";
import { Tile } from "./style";
import { hexToRgb, rgbToHex } from "../../utils/color";

const ColorTile = (props: Props) => {

    const {name , value } = props;
    const [showDetails, setShowDetails] = useState(false);

    const renderDetails = useCallback(() => {
        const rgb = typeof value === "string" ? hexToRgb(value)?.join() : value.join();
        const hex = typeof value === "string" ? value : rgbToHex(...value);

        return (
            <>
                <h1>{name}</h1>
                <p>{hex}</p>
                <p>rgb({rgb})</p>
            </>
        );
    }, [name, value]);

   return (<Tile 
   bgColor={value} 
   onMouseEnter={() => 
    setShowDetails(true)}
   onMouseLeave={() => 
    setShowDetails(false)}
   >
      {showDetails && renderDetails()}
      </Tile>
   )
}

export default ColorTile;