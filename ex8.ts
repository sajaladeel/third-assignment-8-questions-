// list of temperatures in Celsius, convert in F and store in array, use for loop

function converttemp(temperaturesinCelcius:number[]):
number[]{
    const temperaturesinFahrenheit :number[]=[];
    for(let i =0;i<temperaturesinCelcius.length;i++){
        const celsius = temperaturesinCelcius[i];
        const fahrenheit = (celsius*9/5)+32;
        temperaturesinFahrenheit.push(fahrenheit);
    }
    return temperaturesinFahrenheit;
}

const temperaturesinCelcius1= [26,28,32,15,20,35];
const convertedTemps = converttemp(temperaturesinCelcius1);
console.log(convertedTemps);