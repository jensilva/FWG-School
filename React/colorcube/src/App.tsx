import React, { Fragment, useState } from "react";
import ColorTile from "./components/color-tile";
import { ColorWrapper } from "./components/color-wrapper/style";
import HeaderComp from "./components/header";
import Search from "./components/search";
import { Color } from "./types/color";

const App = () => {

  const [colors, setColors] = useState<Array<Color>>([]);
  return(
    <Fragment>
      <HeaderComp/>
      <Search onSearch={(colors) => setColors(colors)}/>
      <ColorWrapper>
       {colors.map((color) => (
         <ColorTile {...color} key={color.name}/>
       ))}
      </ColorWrapper>
    </Fragment>
  )
}

export default App;