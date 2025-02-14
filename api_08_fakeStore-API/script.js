$(document).ready(function () {
    // Evento para cargar productos
    $("#loadProducts").click(function () {
      // URL de la API para obtener productos
      const url = "https://fakestoreapi.com/products";
  
      // Realizar la solicitud GET
      $.get(url, function (data) {
        // Limpiar la galería antes de agregar nuevos productos
        $("#productGallery").empty();
  
        // Iterar sobre los productos obtenidos
        data.forEach(function (product) {
          // Crear un contenedor para cada producto
          const card = `
            <div class="product">
              <img src="${product.image}" alt="${product.title}">
              <h3>${product.title}</h3>
              <p>$${product.price}</p>
            </div>
          `;
          $("#productGallery").append(card);
        });
      }).fail(function () {
        alert("Error al cargar productos.");
      });
    });
  });
  