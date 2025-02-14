$(document).ready(function () {
    // Evento para cargar imágenes de gatos
    $("#loadCats").click(function () {
      // URL de la API para obtener imágenes de gatos
      const url = "https://api.thecatapi.com/v1/images/search?limit=6";
  
      // Realizar la solicitud GET
      $.get(url, function (data) {
        // Limpiar la galería antes de agregar nuevas imágenes
        $("#catGallery").empty();
  
        // Iterar sobre las imágenes recibidas
        data.forEach(function (cat) {
          // Crear un elemento <img> para cada imagen
          const img = `<img src="${cat.url}" alt="Imagen de un gato">`;
          $("#catGallery").append(img);
        });
      }).fail(function () {
        alert("Error al cargar imágenes de gatos.");
      });
    });
  });
  