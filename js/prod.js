var categoriaActual = null;

function mostrarProductos(categoria, cantidadProductos) {
  // Ocultar los productos de la categoría actual si hay alguno desplegado
  if (categoriaActual) {
    var productosAnteriores = document.getElementById(`productos-${categoriaActual}`);
    productosAnteriores.style.display = 'none';
  }
  else {
    mostrarImagenes(categoria, )
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
        carousel.scrollLeft = 2; // Volver al principio cuando se alcanza el final
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

  // para crear el contacto y maps 
  
// Initialize and add the map
function initMap() {
    // The location of your desired place
    const location = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };
    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });
    // The marker, positioned at the location
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  
  // Form Submission
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle form submission here
  });
  

//prueba 2 de productos 

function mostrarImagenes(categoriaPrueba) {
    // Oculta todas las imágenes
    var imagenes = document.querySelectorAll('.imagen');
    imagenes.forEach(function(imagen) {
        imagen.style.display = 'none';
    });

    // Muestra las imágenes de la categoría seleccionada
    var imagenesCategoria = document.querySelectorAll('.' + categoriaPrueba);
    imagenesCategoria.forEach(function(imagenCategoria) {
        imagenCategoria.style.display = 'block';
    });
}

// carrosel del index con botones
function nextSlide() {
  const carousell = document.querySelector('.carousell'); // Selecciona el elemento con la clase 'carousell'
  const currentScroll = carousell.scrollLeft; // Obtiene la posición de desplazamiento horizontal actual del carrusel
  const itemWidth = carousell.querySelector('.carousell-item').offsetWidth; // Obtiene el ancho del primer elemento del carrusel
  carousell.scrollTo({ // Desplaza el carrusel horizontalmente
    left: currentScroll + itemWidth, // Desplaza a la derecha sumando el ancho del elemento
    behavior: 'smooth' // Añade un desplazamiento suave
  });
}

function prevSlide() {
  const carousell = document.querySelector('.carousell'); // Selecciona el elemento con la clase 'carousell'
  const currentScroll = carousell.scrollLeft; // Obtiene la posición de desplazamiento horizontal actual del carrusel
  const itemWidth = carousell.querySelector('.carousell-item').offsetWidth; // Obtiene el ancho del primer elemento del carrusel
  carousell.scrollTo({ // Desplaza el carrusel horizontalmente
    left: currentScroll - itemWidth, // Desplaza a la izquierda restando el ancho del elemento
    behavior: 'smooth' // Añade un desplazamiento suave
  });
}
//fin carrusel index


// carrosel del index con botones
function nextSlideP() {
  const carrouselprod = document.querySelector('.carrouselprod'); // Selecciona el elemento con la clase 'carousell'
  const currentScrollP = carrouselprod.scrollLeft; // Obtiene la posición de desplazamiento horizontal actual del carrusel
  const itemWidthP = carrouselprod.querySelector('.carprod').offsetWidth; // Obtiene el ancho del primer elemento del carrusel
  carrouselprod.scrollTo({ // Desplaza el carrusel horizontalmente
    left: currentScrollP + itemWidthP, // Desplaza a la derecha sumando el ancho del elemento
    behavior: 'smooth' // Añade un desplazamiento suave
  });
}

function prevSlideP() {
  const carrouselprod = document.querySelector('.carrouselprod'); // Selecciona el elemento con la clase 'carousell'
  const currentScrollP = carrouselprod.scrollLeft; // Obtiene la posición de desplazamiento horizontal actual del carrusel
  const itemWidthP = carrouselprod.querySelector('.carprod').offsetWidth; // Obtiene el ancho del primer elemento del carrusel
  carrouselprodP.scrollTo({ // Desplaza el carrusel horizontalmente
    left: currentScroll - itemWidthP, // Desplaza a la izquierda restando el ancho del elemento
    behavior: 'smooth' // Añade un desplazamiento suave
  });
}
//fin carrusel index