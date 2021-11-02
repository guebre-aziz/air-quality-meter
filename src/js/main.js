import "../css/style.css";

let cityData;
let exploreData;

//-------------------- initialisation with ip-based data ---------------------
async function getDataFromIp(cityName) {
  try {
    let response = await fetch(
      `https://api.waqi.info/feed/here/?token=${process.env.AQICN_API_KEY}`
    );
    let cityDataTemporary = await response.json();
    if (cityDataTemporary.status == "error") throw cityDataTemporary;
    cityData = cityDataTemporary;
    updateTileInfo();
    tileMap.setView(cityData.data.city.geo, 11);
  } catch (err) {
    if (err.status == "error" && err.data == "Over quota") {
      alert(
        "Server sovvracarico di richieste, attendere un istante e riprovare"
      );
    } else if (err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    } else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
}

getDataFromIp();

// ----------------------- search city from input field-----------------------
async function getDataFromInput(cityName) {
  try {
    let response = await fetch(
      `https://api.waqi.info/feed/${cityName}/?token=${process.env.AQICN_API_KEY}`
    );
    let cityDataTemporary = await response.json();
    if (cityDataTemporary.status == "error") throw cityDataTemporary;
    cityData = cityDataTemporary;
    updateTileInfo();
    tileMap.setView(cityData.data.city.geo, 11);
  } catch (err) {
    if (err.status == "error" && err.data == "Over quota") {
      alert(
        "Server sovvracarico di richieste, attendere un istante e riprovare"
      );
    } else if (err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    } else if (err.status == "error" && err.data == "Unknown station") {
      alert("Città sconosciuta, prego inserire un altro");
    } else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
}

cityInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    getDataFromInput(event.target.value);
    event.target.value = "";
  }
});

// ----------------------- search city by Leaflet latlng -------------------------
async function getDataFromLatlng(event) {
  let lat = event.latlng.lat;
  let lng = event.latlng.lng;
  try {
    let response = await fetch(
      `https://api.waqi.info/feed/geo:${lat};${lng}/?token=${process.env.AQICN_API_KEY}`
    );
    let cityDataTemporary = await response.json();
    console.log(cityDataTemporary);
    if (cityDataTemporary.status == "error") throw cityDataTemporary;
    cityData = cityDataTemporary;
    updateTileInfo();
    updateTileMap();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  } catch (err) {
    if (err.status == "error" && err.data == "Over quota") {
      alert(
        "Server sovvracarico di richieste, attendere un istante e riprovare"
      );
    } else if (err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    } else if (err.status == "error" && err.data == "Unknown station") {
      alert("Città sconosciuta, prego inserire un altro");
    } else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
}

// -------------------------search from gelocalisation------------------------
var options = {
  enableHighAccuracy: true,
  maximumAge: 0,
};

async function getPosAppruved(pos) {
  try {
    let crd = pos.coords;
    let response = await fetch(
      `https://api.waqi.info/feed/geo:${crd.latitude};${crd.longitude}/?token=${process.env.AQICN_API_KEY}`
    );
    let cityDataTemporary = await response.json();
    if (cityDataTemporary.status == "error") throw cityDataTemporary;
    cityData = cityDataTemporary;
    updateTileInfo();
    tileMap.setView(cityData.data.city.geo, 11);
  } catch (err) {
    if (err.status == "error" && err.data == "Over quota") {
      alert(
        "Server sovvracarico di richieste, attendere un istante e riprovare"
      );
    } else if (err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    } else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
}

function getPosDenied(err) {
  alert("Errore accesso a posizione attuale. Prego riprovare.");
}

getPosButton.onclick = () =>
  navigator.geolocation.getCurrentPosition(
    getPosAppruved,
    getPosDenied,
    options
  );
getPosButton2.onclick = () =>
  navigator.geolocation.getCurrentPosition(
    getPosAppruved,
    getPosDenied,
    options
  );

// ------------------------------update function-----------------------------
function updateTileInfo() {
  cityNameId.textContent = cityData.data.city.name;
  cityTimeId.textContent = cityData.data.time.s;
  aqiId.textContent = cityData.data.aqi;

  if (cityData.data.aqi <= 50) {
    aqiDivId.style.backgroundColor = "green";
    aqiDescriptionId.textContent = "Molto basso";
  } else if (cityData.data.aqi > 50 && cityData.data.aqi <= 100) {
    aqiDivId.style.backgroundColor = "#FDD64B";
    aqiDescriptionId.textContent = "Basso";
  } else if (cityData.data.aqi > 100 && cityData.data.aqi <= 150) {
    aqiDivId.style.backgroundColor = "orange";
    aqiDescriptionId.textContent = "Medio";
  } else if (cityData.data.aqi > 150 && cityData.data.aqi <= 200) {
    aqiDivId.style.backgroundColor = "red";
    aqiDescriptionId.textContent = "Alto";
  } else if (cityData.data.aqi > 200 && cityData.data.aqi <= 300) {
    aqiDivId.style.backgroundColor = "purple";
    aqiDescriptionId.textContent = "Molto alto";
  } else if (cityData.data.aqi > 300) {
    aqiDivId.style.backgroundColor = "maroon";
    aqiDescriptionId.textContent = "Estremamente nocivo";
  }
}

// -------------------------------leaflet tileMap--------------------------------
var tileMap = L.map("tileMapId").setView([0, 0], 1);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    maxZoom: 18,
    id: "mapbox/navigation-day-v1",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: process.env.LEAFLET_API_KEY,
  }
).addTo(tileMap);

var marker = L.marker();

function updateTileMap() {
  tileMap.setView(cityData.data.city.geo, 11);
  marker.setLatLng(cityData.data.city.geo).addTo(tileMap);
}

tileMap.on("click", getDataFromLatlng);

//----------------------------- Leaflet exploreMap---------------------------------
var exploreMap = L.map("exploreMap").setView([45.465454, 9.186516], 5);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    maxZoom: 18,
    id: "mapbox/navigation-day-v1",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: process.env.LEAFLET_API_KEY,
  }
).addTo(exploreMap);

async function getExploreMapData(event) {
  let bounds = event.target.getBounds();
  let lat1 = bounds._northEast.lat;
  let lng1 = bounds._northEast.lng;
  let lat2 = bounds._southWest.lat;
  let lng2 = bounds._southWest.lng;

  try {
    let response = await fetch(
      `https://api.waqi.info/map/bounds/?latlng=${lat1},${lng1},${lat2},${lng2}&token=${process.env.AQICN_API_KEY}`
    );
    let exploreTemporaryData = await response.json();
    if (exploreTemporaryData.status == "error") throw exploreTemporaryData;
    exploreData = exploreTemporaryData;
    updateExploreMap();
  } catch (err) {
    if (err.status == "error" && err.data == "Over quota") {
      alert(
        "Server sovvracarico di richieste, attendere un istante e riprovare"
      );
    } else if (err.status == "error" && err.data == "Invalid key") {
      alert("Chiave API invalida, contattare amministratore del sito web");
    } else {
      alert("Si è verificato un errore: " + err.name + ": " + err.message);
    }
  }
}

var layerGroup = L.layerGroup().addTo(exploreMap); // using layer group as a mask for a fast map cleaning

function updateExploreMap() {
  layerGroup.clearLayers(); // cleaning map before adding other popup

  exploreData.data.forEach((station, index) => {
    if (index < 80) {
      // amount data limitation for better performance
      let aqiPopup = L.popup({
        autoPan: false,
        closeButton: false,
        closeOnClick: false,
        className: "exploreMapPopup",
      });

      aqiPopup
        .setLatLng([station.lat, station.lon])
        .setContent(
          `
            <div id="exploreAqiId" class="leaflet-popup-content" style="background-color: ${getColor()}">
              <h4 class="leaflet-popup-content">${station.aqi}</h4>
            </div>
          `
        )
        .addTo(layerGroup);
    }

    function getColor() {
      if (station.aqi <= 50) {
        return "green";
      } else if (station.aqi > 50 && station.aqi <= 100) {
        return "#FDD64B";
      } else if (station.aqi > 100 && station.aqi <= 150) {
        return "orange";
      } else if (station.aqi > 150 && station.aqi <= 200) {
        return "red";
      } else if (station.aqi > 200 && station.aqi <= 300) {
        return "purple";
      } else if (station.aqi > 300) {
        return "maroon";
      } else {
        return "grey";
      }
    }
  });
}

exploreMap.on("moveend", getExploreMapData);

// --------------------firebase-----------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhwJgiEELS9_f-wXiLdJg3PsRwCuRmBok",
  authDomain: "air-quality-meter-ca916.firebaseapp.com",
  projectId: "air-quality-meter-ca916",
  storageBucket: "air-quality-meter-ca916.appspot.com",
  messagingSenderId: "153523437000",
  appId: "1:153523437000:web:41f1ece5cdbfa5defbd4fd",
  measurementId: "G-PLT6BNBP1W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
