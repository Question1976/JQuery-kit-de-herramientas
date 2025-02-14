$(document).ready(function () {
    // Evento para cargar usuarios aleatorios
    $("#loadUsers").click(function () {
      // URL de la API para obtener usuarios aleatorios
      const url = "https://randomuser.me/api/?results=6";
  
      // Realizar la solicitud GET
      $.get(url, function (data) {
        // Limpiar la galería antes de agregar nuevos usuarios
        $("#userGallery").empty();
  
        // Iterar sobre los usuarios obtenidos
        data.results.forEach(function (user) {
          // Crear un contenedor para cada usuario
          const card = `
            <div class="user">
              <img src="${user.picture.large}" alt="${user.name.first}">
              <h3>${user.name.first} ${user.name.last}</h3>
              <p>${user.email}</p>
            </div>
          `;
          $("#userGallery").append(card);
        });
      }).fail(function () {
        alert("Error al cargar usuarios.");
      });
    });
  });
  