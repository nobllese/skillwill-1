const temperature = 10;
console.log(temperature)

function FahrenheitToCelsius(temperature) {
  if (typeof temperature === 'number') {
    let celsius = (temperature - 32) * 5 / 9;
    return celsius;
  } else {  
    return false;
  }
}

console.log(FahrenheitToCelsius(temperature));

