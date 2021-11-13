
import React, {useState, useCallback} from "react";
import List from "./components/List";

const App = () => {

  let [name, setName] = useState("");
  let [countAlgo, setCountAlgo] = useState(0);
  const animalList = ["Cachorro", "Hamster", "Porco da India"];
  const colorList = [ "Preto", "Branco", "Marrom", "Malhado"]

  const incrementAlgo = useCallback(() => {
    setCountAlgo(countAlgo + 1)
  }, [countAlgo])

  const resetAlgo = useCallback(() => {
    setCountAlgo( countAlgo = 0);
  }, [countAlgo]);

return (
<> 
  <label>
   Qual seu nome?
  </label>
  <input type="text" placeholder="Digite aqui" value={name} onChange={(e) => {
      setName(e.target.value);
    } 
  } /> 
  {
    name && ( <h1>Olá {name} </h1> ) 
  }  
 
  <p>Quantidade de algo: {countAlgo}</p>
  <button onClick={incrementAlgo}>Aumentar algo</button>
  <button onClick={resetAlgo}>Reset</button>

  <List items={animalList}/>
  <List items={colorList}/>
</>
  );
}

export default App;