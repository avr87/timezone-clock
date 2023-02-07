function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");
  }

  //Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format("HH:mm:ss");
  }
  //Dar Es Salaam
  let darEsSalaamElement = document.querySelector("#dar-es-salaam");
  if (darEsSalaamElement) {
    let darEsSalaamDateElement = darEsSalaamElement.querySelector(".date");
    let darEsSalaamTimeElement = darEsSalaamElement.querySelector(".time");
    let darEsSalaamTime = moment().tz("Africa/Dar_Es_Salaam");

    darEsSalaamDateElement.innerHTML = darEsSalaamTime.format("MMMM Do YYYY");
    darEsSalaamTimeElement.innerHTML = darEsSalaamTime.format("HH:mm:ss");
  }
  // Bangkok
  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTime = moment().tz("Asia/Bangkok");

    bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do YYYY");
    bangkokTimeElement.innerHTML = bangkokTime.format("HH:mm:ss");
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateLocation(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#displayCity");
  let cityElement = citiesElement.appendChild(document.createElement("div"));
  console.log(cityElement);

  cityElement.innerHTML = updateCity(cityName, cityTimeZone);

  setInterval(() => {
    cityElement.innerHTML = updateCity(cityName, cityTimeZone);
  }, 1000);

  document.querySelector("#allCities").style.display = "inline";
}

function updateCity(cityName, cityTimeZone) {
  let cityDate = moment().tz(cityTimeZone);
  return `
  <div class="cities">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityDate.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityDate.format("HH:mm:ss")}</div>
          </div>
          `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateLocation);
