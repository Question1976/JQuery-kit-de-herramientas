$(document).ready(function () {
    // Evento para cargar cócteles
    $("#loadCocktails").click(function () {
      // URL de la API para obtener cócteles aleatorios
      const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  
      // Realizar la solicitud GET
      $.get(url, function (data) {
        // Limpiar la galería antes de agregar nuevos cócteles
        $("#cocktailGallery").empty();
  
        // Iterar sobre las bebidas obtenidas
        data.drinks.forEach(function (cocktail) {
          // Crear un contenedor para cada cóctel
          const card = `
            <div class="cocktail">
              <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
              <h3>${cocktail.strDrink}</h3>
              <p>${cocktail.strCategory}</p>
              <p>${cocktail.strInstructions}</p>
            </div>
          `;
          $("#cocktailGallery").append(card);
        });
      }).fail(function () {
        alert("Error al cargar cócteles.");
      });
    });
  });
  