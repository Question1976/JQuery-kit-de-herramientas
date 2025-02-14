$(document).ready(function () {
    // Evento para cargar precios de criptomonedas
    $("#loadCrypto").click(function () {
      // URL de la API CoinGecko para precios de criptomonedas
      const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1";
  
      // Realizar la solicitud GET
      $.get(url, function (data) {
        // Limpiar la tabla antes de agregar nuevas filas
        $("#cryptoTable tbody").empty();
  
        // Iterar sobre las criptomonedas recibidas
        data.forEach(function (coin) {
          // Crear una fila para cada moneda
          const row = `
            <tr>
              <td>${coin.name}</td>
              <td>$${coin.current_price.toFixed(2)}</td>
              <td>${coin.total_volume.toLocaleString()}</td>
            </tr>
          `;
          $("#cryptoTable tbody").append(row);
        });
      }).fail(function () {
        alert("Error al cargar precios de criptomonedas.");
      });
    });
  });
  