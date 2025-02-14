$(document).ready(function () {
    // Evento para cargar personajes de Star Wars
    $("#loadStarWars").click(function () {
      // URL de la API para obtener personajes de Star Wars
      const url = "https://swapi.dev/api/people/";
  
      // Realizar la solicitud GET
      $.get(url, function (data) {
        // Limpiar la galería antes de agregar nuevos personajes
        $("#starWarsGallery").empty();
  
        // Iterar sobre los personajes obtenidos
        data.results.forEach(function (character) {
          // Crear un contenedor para cada personaje
          const card = `
            <div class="starWarsCharacter">
              <h3>${character.name}</h3>
              <p>Genero: ${character.gender}</p>
              <p>Altura: ${character.height} cm</p>
            </div>
          `;
          $("#starWarsGallery").append(card);
        });
      }).fail(function () {
        alert("Error al cargar personajes de Star Wars.");
      });
    });
  });
  