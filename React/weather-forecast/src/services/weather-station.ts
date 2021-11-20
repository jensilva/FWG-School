import axios from "axios";
import { Forecast } from "./types";

const API_PATH = "//api.openweathermap.org/data/2.5/";
const API_KEY = "fbf712a5a83d7305c3cda4ca8fe7ef29";

export const getDailyForecast = async (city: string, days = 7):Promise<Forecast> => {
console.log(city)
const params = new URLSearchParams([
    ["q", city],
    ["cnt", days.toString()],
    ["appid", API_KEY],
    ["units", "metric"],
    ["lang", "pt_br"],
]);

try{
    //Promise
    const response = await axios.get<Forecast>(`${API_PATH}/forecast/daily`, {params})
   return response.data 
} catch (err) {
    throw err;
}

}