let celcius =  document.querySelector('#celcius');
let kelvin =  document.querySelector('#kelvin');
let fahrenheit =  document.querySelector('#fahrenheit');
let celcius1 =  document.querySelector('#celcius1');
let kelvin1 =  document.querySelector('#kelvin1');
let fahrenheit1 =  document.querySelector('#fahrenheit1');
let temperature =  document.querySelector('#temperature');
let tempValue;

//add listeners 

temperature.addEventListener('keyup',result);
celcius.addEventListener('click', result);
kelvin.addEventListener('click', result);
fahrenheit.addEventListener('click', result);

tempValue = temperature.value;


function result() {

 tempValue = temperature.value;

 if (celcius.checked && tempValue !== "") {
   celcius1.value = Number(tempValue);
   kelvin1.value = Number(tempValue) + 273.15; 
   fahrenheit1.value = ((Number(tempValue) * 9/5) + 32).toFixed(4);
 }else if (celcius.checked && tempValue === "") { 
  celcius1.value = "";
  kelvin1.value = "";
  fahrenheit1.value = "";
}
if (kelvin.checked && tempValue !== "") {
  celcius1.value = Number(tempValue) - 273.15;
  kelvin1.value = Number(tempValue); 
  fahrenheit1.value = ((celcius1.value * 9/5) + 32).toFixed(4);
}else if (kelvin.checked && tempValue === "") { 
 celcius1.value = "";
 kelvin1.value = "";
 fahrenheit1.value = "";
}
if (fahrenheit.checked && tempValue !== "") {
  celcius1.value = ((Number(tempValue) - 32) * 5/9).toFixed(4);
  kelvin1.value = celcius1.value * 1 + 273.15; 
  fahrenheit1.value = Number(tempValue);
}else if (fahrenheit.checked && tempValue === "") { 
 celcius1.value = "";
 kelvin1.value = "";
 fahrenheit1.value = "";
}
}
 