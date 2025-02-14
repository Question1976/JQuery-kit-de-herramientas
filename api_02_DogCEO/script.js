$(document).ready(function () {
    // Manejar el evento de clic en el botón
    $("#loadDogs").click(function () {
      // Llamada a la API para obtener imágenes aleatorias de perros
      $.get("https://dog.ceo/api/breeds/image/random/6", function (data) {
        // Limpiar el contenedor antes de agregar nuevas imágenes
        $("#dogGallery").empty();
  
        // Iterar sobre el arreglo de URLs de imágenes
        data.message.forEach(function (url) {
          // Crear un elemento <img> para cada imagen
          const img = `<img src="${url}" alt="Imagen de un perro">`;
          $("#dogGallery").append(img);
        });
      }).fail(function () {
        alert("Error al cargar las imágenes de perros.");
      });
    });
  });
  