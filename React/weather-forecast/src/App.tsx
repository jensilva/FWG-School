import React, { useState } from "react";
import Header from "./components/header";
import { Forecast } from "./services/types";
import {getDailyForecast} from "./services/weather-station"


const App = () => {
  const [forecast, setForecast] = useState<Forecast>();
  return (
    <>
    <Header onSearch={ async (city)=> {
        if (city && city.toLowerCase().trim() !==forecast?.city.name) {
        setForecast(await getDailyForecast(city))
        }
      }
    }
    />
    <main>
      <div>
        ...
      </div>
    </main>
   </>

  )
}

export default App;