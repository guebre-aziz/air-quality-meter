import "./style.css";

const aqicnApiKey = process.env.AQICN_API_KEY;
const leafletApiKey = process.env.LEAFLET_API_KEY;
let cityData;

//-------------------- initialisation with ip based data ---------------------

async function getDataFromIp(cityName) {
  try {
    let response = await fetch(`https://api.waqi.info/feed/here/?token=${aqicnApiKey}`);
    let cityDataTemporary = await response.json();
    console.log(cityDataTemporary);
    if (cityDataTemporary.status == "error") throw cityDataTemporary;
    cityData = cityDataTemporary;
    updateInfo();
    tileMap.setView(cityData.data.city.geo, 11);
  } catch (err) {
    if (err.status == "error" && err.data == "Over quota") {
      alert("Server sovvracarico di richieste, attendere un istante e riprovare");
    } else if (err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    } else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
};

getDataFromIp();


// -------------------- search city from input field-----------------------
async function getDataFromInput(cityName) {
  try {
    let response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${aqicnApiKey}`);
    let cityDataTemporary = await response.json();
    console.log(cityDataTemporary);
    if (cityDataTemporary.status == "error") throw cityDataTemporary;
    cityData = cityDataTemporary;
    updateInfo();
    tileMap.setView(cityData.data.city.geo, 11);
  } catch (err) {

    if (err.status == "error" && err.data == "Over quota") {
      alert("Server sovvracarico di richieste, attendere un istante e riprovare");
    } else if (err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    } else if (err.status == "error" && err.data == "Unknown station") {
      alert("Città sconosciuta, prego inserire un altro");
    } else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
};

cityInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    getDataFromInput(event.target.value);
    event.target.value = "";
  }
});

async function getDataFromLatlng(event) {
  let lat = event.latlng.lat;
  let lng = event.latlng.lng;
  try {
    let response = await fetch(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=${aqicnApiKey}`);
    let cityDataTemporary = await response.json();
    console.log(cityDataTemporary);
    if (cityDataTemporary.status == "error") throw cityDataTemporary;
    cityData = cityDataTemporary;
    updateInfo();
    tileMap.setView(cityData.data.city.geo, 11);
  } catch (err) {
    if (err.status == "error" && err.data == "Over quota") {
      alert("Server sovvracarico di richieste, attendere un istante e riprovare");
    } else if (err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    } else if (err.status == "error" && err.data == "Unknown station") {
      alert("Città sconosciuta, prego inserire un altro");
    } else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
};

// -----------------search from gelocalisation--------------------

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

async function getPosAppruved(pos) {
  try {
    let crd = pos.coords;
    let response = await fetch(`https://api.waqi.info/feed/geo:${crd.latitude};${crd.longitude}/?token=${aqicnApiKey}`);
    let cityDataTemporary = await response.json();
    console.log(cityDataTemporary);
    if (cityDataTemporary.status == "error") throw cityDataTemporary;
    cityData = cityDataTemporary;
    updateInfo();
    tileMap.setView(cityData.data.city.geo, 11);
  } catch (err) {
    if (err.status == "error" && err.data == "Over quota") {
      alert("Server sovvracarico di richieste, attendere un istante e riprovare");
    } else if (err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    } else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
};

function getPosDenied(err) {
  alert("Errore accesso a posizione attuale. Prego riprovare.");
}

getPosButton.onclick = () => navigator.geolocation.getCurrentPosition(getPosAppruved, getPosDenied, options);
getPosButton2.onclick = () => navigator.geolocation.getCurrentPosition(getPosAppruved, getPosDenied, options);

// ----------------update function-----------------------
function updateInfo() {
  cityNameId.textContent = cityData.data.city.name;
  cityTimeId.textContent = cityData.data.time.s;
  aqiId.textContent = cityData.data.aqi;

  if(cityData.data.aqi <= 50){
    aqiDivId.style.backgroundColor = "green";
    aqiDescriptionId.textContent = "Molto basso";
  }
  else if (cityData.data.aqi > 50 && cityData.data.aqi <=100){
    aqiDivId.style.backgroundColor = "#FDD64B";
    aqiDescriptionId.textContent = "Basso";
  }
  else if (cityData.data.aqi > 100 && cityData.data.aqi <=150){
    aqiDivId.style.backgroundColor = "orange";
    aqiDescriptionId.textContent = "Medio";
  }
  else if (cityData.data.aqi > 150 && cityData.data.aqi <=200){
    aqiDivId.style.backgroundColor = "red";
    aqiDescriptionId.textContent = "Alto";
  }
  else if (cityData.data.aqi > 200 && cityData.data.aqi <=300){
    aqiDivId.style.backgroundColor = "purple";
    aqiDescriptionId.textContent = "Molto alto";
  }
  else if(cityData.data.aqi > 300){
    aqiDivId.style.backgroundColor = "maroon";
    aqiDescriptionId.textContent = "Molto basso";
  };

};

// ------------------------leaflet--------------------------

var tileMap = L.map('tileMapId').setView([0, 0], 1);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox/navigation-day-v1',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: process.env.LEAFLET_API_KEY
}).addTo(tileMap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("here")
        .openOn(tileMap);
    getDataFromLatlng(e);
}

tileMap.on('click', onMapClick);
