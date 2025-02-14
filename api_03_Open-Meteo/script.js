$(document).ready(function () {
    $("#loadWeather").click(function () {
      const lat = 40.7128; // Latitud (ejemplo: Nueva York)
      const lon = -74.0060; // Longitud (ejemplo: Nueva York)
  
      // Llamada a la API de Open-Meteo
      $.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`, function (data) {
        // Obtener datos del clima actual
        const weather = data.current_weather;
  
        // Renderizar la información
        const weatherHtml = `
          <div class="weather-info">
            <span>Temperatura:</span> ${weather.temperature}°C
          </div>
          <div class="weather-info">
            <span>Velocidad del Viento:</span> ${weather.windspeed} km/h
          </div>
        `;
  
        $("#weather").html(weatherHtml);
      }).fail(function () {
        alert("Error al cargar la información del clima.");
      });
    });
  });
  