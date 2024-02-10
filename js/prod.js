var categoriaActual = null;

function mostrarProductos(categoria, cantidadProductos) {
  // Ocultar los productos de la categoría actual si hay alguno desplegado
  if (categoriaActual) {
    var productosAnteriores = document.getElementById(`productos-${categoriaActual}`);
    productosAnteriores.style.display = 'none';
  }

  var productosContainer = document.getElementById(`productos-${categoria}`);
  productosContainer.innerHTML = '';

  for (let i = 1; i <= cantidadProductos; i++) {
    var producto = document.createElement('div');
    producto.className = 'producto';
    producto.textContent = `${categoria} - Producto ${i}`;
    producto.onclick = function() {
      mostrarImagenes(categoria, `producto${i}`);
    };
    productosContainer.appendChild(producto);
  }

  // Mostrar la lista de productos
  productosContainer.style.display = 'block';

  // Actualizar la categoría actual
  categoriaActual = categoria;
}

function mostrarImagenes(categoria) {
  // Mostrar imágenes para categorías 5 y 6 (sin productos)
  var imagenesContainer = document.getElementById('imagenes');
  imagenesContainer.innerHTML = '';

  for (let i = 1; i <= 6; i++) {
    var img = document.createElement('img');
    img.src = `${categoria}_imagen${i}.jpg`;
    img.alt = `Imagen ${categoria} - ${i}`;
    imagenesContainer.appendChild(img);
  }

  // Ocultar los productos de la categoría actual si hay alguno desplegado
  if (categoriaActual) {
    var productosAnteriores = document.getElementById(`productos-${categoriaActual}`);
    productosAnteriores.style.display = 'none';
  }

  // Actualizar la categoría actual
  categoriaActual = categoria;
}

//corrusell 
  // Función para desplazar automáticamente el carrusel
  function autoScroll() {
    var carousel = document.querySelector('.carousell');
    var scrollWidth = carousel.scrollWidth;
    var clientWidth = carousel.clientWidth;

    // Comprobar si hay más contenido para desplazarse
    if (scrollWidth > clientWidth) {
      carousel.scrollLeft += 1; // Desplazar el carrusel hacia la derecha
      if (carousel.scrollLeft >= scrollWidth - clientWidth) {
        carousel.scrollLeft = 0; // Volver al principio cuando se alcanza el final
      }
    }
  }

  // Iniciar el desplazamiento automático cada 3 segundos
  setInterval(autoScroll, 3000);

  //slide

  var slides = document.querySelectorAll('.slideshow img'); // Obtener todas las imágenes
  var currentSlide = 0;

  function mostrarSlide() {
    // Ocultar todas las imágenes
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.add('hidden');
    }

    // Mostrar la siguiente imagen
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0; // Volver al principio si se alcanza el final
    }
    slides[currentSlide].classList.remove('hidden');

    // Programar el cambio de imagen cada 2 segundos
    setTimeout(mostrarSlide, 2000);
  }

  // Iniciar el slideshow
  mostrarSlide();