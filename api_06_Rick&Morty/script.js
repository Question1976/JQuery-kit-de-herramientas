$(document).ready(function () {
    // Evento para cargar personajes
    $("#loadCharacters").click(function () {
      // URL de la API Rick and Morty
      const url = "https://rickandmortyapi.com/api/character";
  
      // Realizar la solicitud GET
      $.get(url, function (data) {
        // Limpiar el contenedor antes de agregar nuevos personajes
        $("#characterGallery").empty();
  
        // Iterar sobre los primeros personajes
        data.results.slice(0, 6).forEach(function (character) {
          // Crear un contenedor para cada personaje
          const card = `
            <div class="character">
              <img src="${character.image}" alt="${character.name}">
              <h3>${character.name}</h3>
              <p>${character.species} - ${character.status}</p>
            </div>
          `;
          $("#characterGallery").append(card);
        });
      }).fail(function () {
        alert("Error al cargar personajes.");
      });
    });
  });
  