import "./style.css";
// import landscape from './img/landscape.jpg';
// const img = new Image();
// img.src = landscape;

const apiKey = process.env.API_KEY;
let cityData;

// search city from input field
async function getDataFromInput(cityName) {
  try {
    let response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`);
    let cityDataTemporary = await response.json();
    if(cityDataTemporary.status == "error") throw cityDataTemporary;
    cityData = cityDataTemporary;
    textCity.textContent = cityData.data.city.name;
    // console.log(cityData);
    // textCity.textContent = cityData.data.city.name;
  } catch (err) {

    if(err.status == "error" && err.data == "Over quota") {
      alert("Server sovvracarico di richieste, attendere un istante e riprovare");
    }
    else if(err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    }
    else if(err.status == "error" && err.data == "Unknown station") {
      alert("Città sconosciuta, prego inserire un altro");
    }
    else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
};

cityInput.addEventListener("keydown", (event) => {
  // setTimeout(() => getDataFromInput(event.target.value), 1500);
  if (event.keyCode === 13) {
    getDataFromInput(event.target.value);
  }
});

// richearch from gelocalisation

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

async function getPosAppruved(pos) {
  try {
    let crd = pos.coords;
    let response = await fetch(`https://api.waqi.info/feed/geo:${crd.latitude};${crd.longitude}/?token=${apiKey}`);
    let cityDataTemporary = await response.json();
    if(cityDataTemporary.status == "error") throw cityDataTemporary;
    cityData = cityDataTemporary;
    textCity.textContent = cityData.data.city.name;
    // console.log(`More or less ${crd.accuracy} meters.`);
  } catch (err) {

    if(err.status == "error" && err.data == "Over quota") {
      alert("Server sovvracarico di richieste, attendere un istante e riprovare");
    }
    else if(err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    }
    else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
};

function getPosDenied(err) {
  alert("Errore accesso a posizione attuale. Prego riprovare.");
}

getPosButton.onclick = () => navigator.geolocation.getCurrentPosition(getPosAppruved, getPosDenied, options);
// main
