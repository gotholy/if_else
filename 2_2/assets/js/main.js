function checkAirQuality() {
  const aqiSlider = document.getElementById("aqiSlider");
  const aqiOutput = document.getElementById("aqiOutput");
  const aqiValue = +aqiSlider.value;

  let backgroundColor;
  let airQualityText;

  if (aqiValue <= 50) {
    backgroundColor = "#00e400";
    airQualityText =
      "Level of health concern: Good <br/>  Level of health effect: Little or no risk";
  } else if (aqiValue <= 100) {
    backgroundColor = "#ffff00";
    airQualityText =
      "Level of health concern: Moderate <br/> Level of health effect: Acceptable quality";
  } else if (aqiValue < 150) {
    backgroundColor = "#ff7e00";
    airQualityText =
      "Level of health concern: Unhealthy for sensitive groups <br/>Level of health effect: Generable publics not likely affected";
  } else {
    backgroundColor = "#ff0000";
    airQualityText = "!!!!Unhealthy!!!!";
  }

  document.body.style.backgroundColor = backgroundColor;
  aqiOutput.innerHTML = `AQI: ${aqiValue}`;
  aqiTextOutput.innerHTML = `${airQualityText}`;
}
