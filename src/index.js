import "./style.css";
// import landscape from './img/landscape.jpg';
// const img = new Image();
// img.src = landscape;

const title = document.createElement("h3");
title.textContent = "Pullution index";
document.body.append(title);
title.classList.add("hello");






let apiKey = process.env.API_KEY;
let form = document.forms.cityFieldForm;
let inputCity = form.elements.cityInput;
let citta = "milano";

async function getDataFromInput(cityName) {
  try {
    let response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`);
    let cityData = await response.text();
    document.body.append(cityData);
  } catch (err) {
    alert("Opsss: " + err.message);
  }
};

getDataFromInput("berlin");
