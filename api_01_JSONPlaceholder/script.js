// Espera a que el documento HTML esté completamente cargado
$(document).ready(function () {
    // Selecciona el botón y agrega un evento de clic
    $("#loadPosts").click(function () {
      // Usa jQuery para hacer una solicitud GET a la API
      $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
        // Limpiar la lista antes de agregar elementos
        $("#posts").empty();
  
        // Iterar sobre los primeros 10 elementos del arreglo
        data.slice(0, 10).forEach(function (post) {
          // Crear un elemento <li> y añadirlo a la lista
          const listItem = `<li><strong>${post.title}</strong><p>${post.body}</p></li>`;
          $("#posts").append(listItem);
        });
      }).fail(function () {
        // Manejar errores en caso de que la solicitud falle
        alert("Error al cargar las publicaciones.");
      });
    });
  });
  