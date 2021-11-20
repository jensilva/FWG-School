export interface Coord {
    lat: number;
    lon: number;
}

export interface City {
    coord: Coord;
    country: string;
    id: number;
    name: string;
    population: number;
    timezone: number;
}

export interface TemperatureFeelsLike{
    day: number;
    eve: number;
    morn: number;
    night: number
}

export interface Temperature extends TemperatureFeelsLike {
    max: number;
    min: number;
}

export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface ForecastDetail {
    clouds: number;
    deg: number;
    dt: number;
    feels_like: TemperatureFeelsLike;
    gust: number;
    humidity: number;
    pop: number;
    pressure: number;
    rain: number;
    speed: number;
    sunrise: number;
    temp: Temperature;
    weather: Array<Weather>
}

export interface Forecast {
    city: City;
    cnt: number;
    cod: string;
    list: ForecastDetail;
    message: number;
}