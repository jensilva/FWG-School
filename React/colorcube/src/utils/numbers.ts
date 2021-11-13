export const getRandomNumber = (min: number, max: number): number => Math.random() * max + min


export const getRandomInteger = (min: number, max: number) => Math.round(getRandomNumber(min, max))
