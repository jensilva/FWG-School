import React, { Fragment, useState } from "react";
import HeaderComp from "./components/header";
import Search from "./components/search";
import { Color } from "./types/color";

const App = () => {

  const [colors, setColors] = useState<Array<Color>>([]);
  return(
    <Fragment>
      <HeaderComp/>
      <Search onSearch={(colors) => setColors(colors)}/>
    </Fragment>
  )
}

export default App;