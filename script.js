/* =====================================================================
   BIT-IO — SCRIPT
   Lo que más vas a editar está al principio:
     1) CONFIG             -> tus datos de contacto
     2) PRODUCTOS          -> tu catálogo
     3) PROYECTOS_GITHUB   -> tus guías y tutoriales
===================================================================== */

/* =====================================================================
   1) CONFIGURACIÓN GENERAL   [PERSONALIZAR AQUÍ: tus datos reales]
===================================================================== */
const CONFIG = {
  // Tu número de WhatsApp: código de país + número, SIN espacios ni "+".
  // Ejemplo México: 52 + 55 + 10 dígitos  ->  "525512345678"
  whatsapp: "522281722199",

  // Cómo se muestra tu teléfono en la página
  telefonoVisible: "+52 2281722199",

  // Tu correo de contacto
  email: "julioyaelcar@gmail.mx",

  // Horario de atención
  horario: "Lun a Vie: 7:00–15:00 · Sáb: 6:00–15:00",

  // Tu dirección o punto de entrega (aparece en Contacto y en el pie)
  direccion: "Carr. Nueva Xalapa-Coatepec 108, Coatepec, 91500 Coatepec, Ver.",

  // Mapa de Google: apunta a tu dirección. Para cambiarla, sustituye
  // el texto después de "q=" por tu dirección (los espacios son %20
  // y las comas %2C).
  mapa: "https://maps.google.com/maps?q=Carr.%20Nueva%20Xalapa-Coatepec%20108%2C%20Coatepec%2C%2091500%20Coatepec%2C%20Ver.&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // [PERSONALIZAR] Tu perfil de GitHub donde subirás las guías
  // (ejemplo: "https://github.com/bit-io")
  github: "https://github.com/JulioYCardenas",

  // [PERSONALIZAR] Tu usuario de Instagram (con @)
  instagramUsuario: "@electronica_bitio",

  // Redes sociales: pon tus enlaces (deja "#" si aún no las tienes)
  redes: {
    facebook: "#",
    instagram: "https://www.instagram.com/electronica_bitio/",
    tiktok: "#"
  }
};

/* =====================================================================
   2) PRODUCTOS   [PERSONALIZAR AQUÍ: tu catálogo real]
   Campos: id (único, sin espacios) · nombre · categoria · precio (MXN)
           · stock (piezas disponibles) · descripcion (corta)
===================================================================== */
const CATEGORIAS = ["Resistencias", "Capacitores", "Transistores", "Motores", "Microcontroladores", "Sensores", "Otros"];

const PRODUCTOS = [
  { id: "p01", nombre: "Resistencia 220 Ω 1/4 W (paquete de 10)", categoria: "Resistencias", precio: 10, stock: 40, descripcion: "Ideal para LEDs y divisores de voltaje en tus prácticas de electrónica." },
  { id: "p02", nombre: "Kit de 100 resistencias de valores variados", categoria: "Resistencias", precio: 95, stock: 12, descripcion: "Los valores más usados en la escuela, listos para cualquier circuito." },
  { id: "p03", nombre: "Capacitor electrolítico 100 µF 16 V (paquete de 5)", categoria: "Capacitores", precio: 15, stock: 30, descripcion: "Para filtrar fuentes de poder y proyectos con 555 o amplificadores." },
  { id: "p04", nombre: "Capacitor cerámico 100 nF (paquete de 20)", categoria: "Capacitores", precio: 18, stock: 35, descripcion: "El clásico '104' para desacoplar la alimentación de tus chips." },
  { id: "p05", nombre: "Transistor NPN 2N2222 (paquete de 5)", categoria: "Transistores", precio: 25, stock: 20, descripcion: "Para conmutar cargas pequeñas y amplificar señales." },
  { id: "p06", nombre: "Transistor TIP120 Darlington", categoria: "Transistores", precio: 30, stock: 15, descripcion: "Maneja más corriente: perfecto para motores y relés con Arduino." },
  { id: "p07", nombre: "Motor DC 3–6 V con caja reductora", categoria: "Motores", precio: 55, stock: 10, descripcion: "Para carritos y ruedas escolares: buena fuerza a baja velocidad." },
  { id: "p08", nombre: "Motor paso a paso 28BYJ-48 con driver ULN2003", categoria: "Motores", precio: 85, stock: 8, descripcion: "Movimientos precisos para brazos robóticos y mecanismos." },
  { id: "p09", nombre: "Servomotor SG90 9 g", categoria: "Motores", precio: 60, stock: 14, descripcion: "Giro de 0° a 180°, compatible con Arduino y ESP32." },
  { id: "p10", nombre: "Tarjeta compatible con Arduino Uno R3", categoria: "Microcontroladores", precio: 320, stock: 9, descripcion: "La opción más común para empezar a programar electrónica." },
  { id: "p11", nombre: "ESP32 DevKit WiFi + Bluetooth", categoria: "Microcontroladores", precio: 185, stock: 11, descripcion: "Doble núcleo y conectividad inalámbrica para proyectos IoT." },
  { id: "p12", nombre: "Raspberry Pi Pico", categoria: "Microcontroladores", precio: 150, stock: 7, descripcion: "Con chip RP2040, programable en MicroPython y C/C++." },
  { id: "p13", nombre: "Sensor ultrasónico HC-SR04", categoria: "Sensores", precio: 45, stock: 18, descripcion: "Mide distancias de 2 a 400 cm. El clásico de los robots evasores." },
  { id: "p14", nombre: "Sensor de temperatura y humedad DHT11", categoria: "Sensores", precio: 38, stock: 16, descripcion: "Lecturas digitales para estaciones climáticas y monitoreo casero." },
  { id: "p15", nombre: "Protoboard de 830 puntos", categoria: "Otros", precio: 65, stock: 13, descripcion: "Con rieles de alimentación, para armar circuitos sin soldar." },
  { id: "p16", nombre: "Cables jumper Dupont macho-hembra (40 pzs)", categoria: "Otros", precio: 45, stock: 22, descripcion: "Conexiones rápidas entre tarjetas, sensores y protoboard." }
];

/* =====================================================================
   3) PROYECTOS DE GITHUB (guías y tutoriales)
   [PERSONALIZAR AQUÍ] Cambia los títulos, descripciones, niveles y
   enlaces por los de tus repositorios. Agrega o quita objetos libremente.
   Niveles sugeridos: "Básico", "Intermedio", "Avanzado".
===================================================================== */
const PROYECTOS_GITHUB = [
  {
    titulo: "Primer circuito: LED parpadeante con Arduino",
    nivel: "Básico",
    descripcion: "Guía paso a paso para prender y apagar un LED desde el código, con el circuito comentado pieza por pieza.",
    enlace: "#"
  },
  {
    titulo: "Robot evasor de obstáculos con HC-SR04",
    nivel: "Intermedio",
    descripcion: "Cómo armar y programar un carrito que esquiva paredes usando sensor ultrasónico y driver de motores.",
    enlace: "#"
  },
  {
    titulo: "Estación de temperatura con ESP32 y DHT11",
    nivel: "Intermedio",
    descripcion: "Lee temperatura y humedad y consúltala desde tu celular por WiFi con una página sencilla.",
    enlace: "#"
  }
];

/* =====================================================================
   4) UTILIDADES E ÍCONOS
===================================================================== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// Formato de precio en pesos mexicanos
function formatoPrecio(numero) {
  return "$" + numero.toLocaleString("es-MX");
}

// Arma el enlace de WhatsApp con el mensaje ya escrito
function linkWhatsApp(mensaje) {
  return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(mensaje);
}

// Ícono de chip para las imágenes placeholder de los productos
const ICONO_CHIP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3"/></svg>';

// Ícono pequeño por categoría (tarjetas destacadas)
const ICONOS_CATEGORIA = {
  "Resistencias": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h3l2.5-6 3.5 12 3.5-12 3.5 12 2.5-6H22"/></svg>',
  "Capacitores": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 4v16M14 4v16M2 12h8M14 12h8"/></svg>',
  "Transistores": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11" r="6"/><path d="M12 2v3M8.5 21l1.2-4M15.5 21l-1.2-4M9 11h6"/></svg>',
  "Motores": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="11" height="9" rx="2"/><path d="M17 11h4M17 14h4M12 17v4M9 21h6"/><circle cx="11.5" cy="12.5" r="1.8"/></svg>',
  "Microcontroladores": ICONO_CHIP,
  "Sensores": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="17" r="2"/><path d="M8.5 12.5a5 5 0 0 1 7 0M5.5 9.5a9 9 0 0 1 13 0"/></svg>',
  "Otros": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="13" rx="2"/><path d="M4 11h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>'
};

/* =====================================================================
   5) CATÁLOGO: buscador, filtro y tarjetas
===================================================================== */
let categoriaActiva = "Todas";
let textoBusqueda = "";

// Dibuja los botones de filtro por categoría
function renderFiltros() {
  const contenedor = $("#filtro-categorias");
  ["Todas", ...CATEGORIAS].forEach((cat) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "chip" + (cat === categoriaActiva ? " activa" : "");
    boton.textContent = cat;
    boton.setAttribute("data-testid", "filtro-" + cat.toLowerCase());
    boton.addEventListener("click", () => {
      categoriaActiva = cat;
      $$("#filtro-categorias .chip").forEach((c) => c.classList.remove("activa"));
      boton.classList.add("activa");
      renderCatalogo();
    });
    contenedor.appendChild(boton);
  });
}

// Tarjeta de producto (imagen placeholder -> [PERSONALIZAR] por tu foto)
function tarjetaHTML(producto, indice) {
  const agotado = producto.stock === 0;
  return `
  <article class="tarjeta-producto" style="--i:${indice}" data-testid="tarjeta-${producto.id}">
    <!-- [PERSONALIZAR] Cambia este bloque por tu foto:
         <img src="TU-FOTO.jpg" alt="${producto.nombre}" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-bottom:1px solid var(--borde)"> -->
    <div class="producto-img" data-testid="imagen-${producto.id}">
      ${ICONO_CHIP}
      <span class="producto-img-etiqueta">${producto.categoria}</span>
    </div>
    <div class="tarjeta-cuerpo">
      <h3 class="tarjeta-nombre">${producto.nombre}</h3>
      <p class="tarjeta-desc">${producto.descripcion}</p>
      <div class="tarjeta-info">
        <span class="tarjeta-precio">${formatoPrecio(producto.precio)}</span>
        <span class="tarjeta-stock${agotado ? " agotado" : ""}">${agotado ? "Agotado" : "Stock: " + producto.stock}</span>
      </div>
      <button type="button" class="btn btn-neon btn-bloque" data-testid="agregar-carrito-${producto.id}" onclick="agregarCarrito('${producto.id}')" ${agotado ? "disabled" : ""}>Agregar al carrito</button>
      <button type="button" class="btn btn-borde btn-bloque" data-testid="apartar-${producto.id}" onclick="abrirApartado('${producto.id}')" ${agotado ? "disabled" : ""}>Apartar</button>
    </div>
  </article>`;
}

// Aplica buscador + categoría y dibuja el catálogo
function renderCatalogo() {
  const contenedor = $("#grid-productos");
  const texto = textoBusqueda.trim().toLowerCase();
  const lista = PRODUCTOS.filter((p) => {
    const coincideCategoria = categoriaActiva === "Todas" || p.categoria === categoriaActiva;
    const coincideTexto = (p.nombre + " " + p.descripcion).toLowerCase().includes(texto);
    return coincideCategoria && coincideTexto;
  });
  if (lista.length === 0) {
    contenedor.innerHTML = '<p class="sin-resultados">Sin resultados… prueba con otra palabra o cambia la categoría.</p>';
    return;
  }
  contenedor.innerHTML = lista.map((p, i) => tarjetaHTML(p, i)).join("");
}

// Tarjetas de categorías destacadas en el inicio
function renderCategoriasDestacadas() {
  const contenedor = $("#categorias-destacadas");
  CATEGORIAS.forEach((cat) => {
    const cantidad = PRODUCTOS.filter((p) => p.categoria === cat).length;
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "cat-tarjeta";
    boton.setAttribute("data-testid", "categoria-" + cat.toLowerCase());
    boton.innerHTML = ICONOS_CATEGORIA[cat] + '<span class="cat-nombre">' + cat + '</span><span class="cat-cantidad">' + cantidad + ' productos</span>';
    boton.addEventListener("click", () => irACategoria(cat));
    contenedor.appendChild(boton);
  });
}

// Va al catálogo ya filtrado por una categoría
function irACategoria(cat) {
  categoriaActiva = cat;
  textoBusqueda = "";
  $("#buscador").value = "";
  $$("#filtro-categorias .chip").forEach((c) => c.classList.toggle("activa", c.textContent === cat));
  renderCatalogo();
  $("#catalogo").scrollIntoView({ behavior: "smooth" });
}

/* =====================================================================
   6) GITHUB: tarjetas de proyectos y guías
===================================================================== */
function renderGithub() {
  const contenedor = $("#grid-github");
  contenedor.innerHTML = PROYECTOS_GITHUB.map((proyecto, i) => `
  <article class="tarjeta-github" data-revelar style="--i:${i}" data-testid="proyecto-github-${i + 1}">
    <div class="tarjeta-github-cabecera">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      <span class="nivel nivel-${proyecto.nivel.toLowerCase()}">${proyecto.nivel}</span>
    </div>
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <a class="tarjeta-github-enlace" data-testid="enlace-proyecto-${i + 1}" href="${proyecto.enlace}" target="_blank" rel="noopener">Ver guía en GitHub →</a>
  </article>`).join("");
  // registra las tarjetas nuevas en la animación de aparición
  $$("#grid-github [data-revelar]").forEach((el) => observador.observe(el));
}

/* =====================================================================
   7) CARRITO: agregar, quitar, cantidades, total y localStorage
===================================================================== */
let carrito = {};
try {
  carrito = JSON.parse(localStorage.getItem("bitio_carrito")) || {};
} catch (error) {
  carrito = {};
}

function guardarCarrito() {
  localStorage.setItem("bitio_carrito", JSON.stringify(carrito));
}

function agregarCarrito(id) {
  const producto = PRODUCTOS.find((p) => p.id === id);
  if (!producto) return;
  const actual = carrito[id] || 0;
  if (actual >= producto.stock) return; // respeta el stock disponible
  carrito[id] = actual + 1;
  guardarCarrito();
  actualizarContador();
  renderCarrito();
  // confirmación breve en el botón
  const boton = $('[data-testid="agregar-carrito-' + id + '"]');
  if (boton) {
    boton.textContent = "Agregado ✓";
    setTimeout(() => (boton.textContent = "Agregar al carrito"), 900);
  }
}

function cambiarCantidad(id, cambio) {
  const producto = PRODUCTOS.find((p) => p.id === id);
  if (!producto) return;
  const nueva = (carrito[id] || 0) + cambio;
  if (nueva <= 0) {
    delete carrito[id];
  } else if (nueva <= producto.stock) {
    carrito[id] = nueva;
  }
  guardarCarrito();
  actualizarContador();
  renderCarrito();
}

function quitarDelCarrito(id) {
  delete carrito[id];
  guardarCarrito();
  actualizarContador();
  renderCarrito();
}

function totalCarrito() {
  return Object.keys(carrito).reduce((suma, id) => {
    const producto = PRODUCTOS.find((p) => p.id === id);
    return producto ? suma + producto.precio * carrito[id] : suma;
  }, 0);
}

function actualizarContador() {
  const total = Object.values(carrito).reduce((a, b) => a + b, 0);
  const contador = $("#carrito-contador");
  contador.textContent = total;
  contador.classList.toggle("oculto", total === 0);
}

function renderCarrito() {
  const contenedor = $("#carrito-items");
  const ids = Object.keys(carrito);
  if (ids.length === 0) {
    contenedor.innerHTML = '<div class="carrito-vacio"><p>Tu carrito está vacío.</p><span>[ agrega productos desde el catálogo ]</span></div>';
  } else {
    contenedor.innerHTML = ids.map((id) => {
      const p = PRODUCTOS.find((prod) => prod.id === id);
      return `
      <div class="carrito-item" data-testid="carrito-item-${id}">
        <div>
          <p class="carrito-item-nombre">${p.nombre}</p>
          <p class="carrito-item-precio">${formatoPrecio(p.precio)} c/u</p>
        </div>
        <div class="carrito-cantidad">
          <button type="button" data-testid="restar-${id}" aria-label="Quitar una unidad" onclick="cambiarCantidad('${id}', -1)">−</button>
          <span data-testid="cantidad-${id}">${carrito[id]}</span>
          <button type="button" data-testid="sumar-${id}" aria-label="Agregar una unidad" onclick="cambiarCantidad('${id}', 1)">+</button>
        </div>
        <button type="button" class="carrito-quitar" data-testid="quitar-${id}" aria-label="Eliminar del carrito" onclick="quitarDelCarrito('${id}')">×</button>
      </div>`;
    }).join("");
  }
  $("#carrito-total").textContent = formatoPrecio(totalCarrito());
}

function abrirCarrito() {
  document.body.classList.add("carrito-abierto");
}

function cerrarCarrito() {
  document.body.classList.remove("carrito-abierto");
}

// Arma el mensaje con la lista de productos y lo manda a WhatsApp
function enviarPedidoWhatsApp() {
  const ids = Object.keys(carrito);
  if (ids.length === 0) return;
  const lineas = ids.map((id) => {
    const p = PRODUCTOS.find((prod) => prod.id === id);
    return "• " + carrito[id] + " × " + p.nombre + " — " + formatoPrecio(p.precio * carrito[id]);
  });
  const mensaje =
    "Hola Bit-IO, quiero hacer un pedido:\n" +
    lineas.join("\n") +
    "\nTotal: " + formatoPrecio(totalCarrito()) + " MXN" +
    "\n\n¿Me ayudan a confirmar la entrega? Gracias.";
  window.open(linkWhatsApp(mensaje), "_blank");
}

/* =====================================================================
   8) APARTADOS: formulario que se envía por WhatsApp
===================================================================== */
function poblarSelect() {
  const select = $("#apartado-producto");
  PRODUCTOS.forEach((p) => {
    const opcion = document.createElement("option");
    opcion.value = p.id;
    opcion.textContent = p.nombre + " — " + formatoPrecio(p.precio);
    select.appendChild(opcion);
  });
}

function abrirApartado(id) {
  $("#apartado-producto").value = id;
  document.body.classList.add("apartado-abierto");
}

function cerrarApartado() {
  document.body.classList.remove("apartado-abierto");
}

function enviarApartado(evento) {
  evento.preventDefault();
  const datos = new FormData(evento.target);
  const producto = PRODUCTOS.find((p) => p.id === datos.get("producto"));
  const mensaje =
    "Hola Bit-IO, quiero apartar un producto:\n" +
    "• Producto: " + producto.nombre + "\n" +
    "• Cantidad: " + datos.get("cantidad") + "\n" +
    "• Nombre: " + datos.get("nombre") + "\n" +
    "• Teléfono: " + datos.get("telefono") + "\n" +
    "• Fecha de recolección: " + datos.get("fecha") + "\n\n" +
    "¿Me confirman disponibilidad y punto de entrega? Gracias.";
  window.open(linkWhatsApp(mensaje), "_blank");
  evento.target.reset();
  cerrarApartado();
}

// Limita la cantidad al stock del producto elegido
$("#apartado-producto").addEventListener("change", (evento) => {
  const producto = PRODUCTOS.find((p) => p.id === evento.target.value);
  const input = $("#apartado-cantidad");
  input.max = producto ? producto.stock : "";
  if (producto && Number(input.value) > producto.stock) input.value = producto.stock;
});

/* =====================================================================
   9) MENÚ MÓVIL Y CIERRE AUTOMÁTICO
===================================================================== */
function alternarMenu() {
  document.body.classList.toggle("menu-abierto");
}
$$("#nav-enlaces a").forEach((enlace) => {
  enlace.addEventListener("click", () => document.body.classList.remove("menu-abierto"));
});

/* =====================================================================
   10) TEMA OSCURO / CLARO (se guarda en localStorage)
===================================================================== */
function alternarTema() {
  const raiz = document.documentElement;
  const claro = raiz.classList.toggle("tema-claro");
  try {
    localStorage.setItem("bitio_tema", claro ? "claro" : "oscuro");
  } catch (error) {}
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = claro ? "#ffffff" : "#0b0e13";
}

/* =====================================================================
   11) BUSCADOR DEL CATÁLOGO
===================================================================== */
$("#buscador").addEventListener("input", (evento) => {
  textoBusqueda = evento.target.value;
  renderCatalogo();
});

/* =====================================================================
   12) ANIMACIONES AL HACER SCROLL Y BRILLO EN TARJETAS
===================================================================== */
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("revelado");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.12 });
$$("[data-revelar]").forEach((el) => observador.observe(el));

// Brillo que sigue al cursor dentro de las tarjetas
$("#grid-productos").addEventListener("mousemove", (evento) => {
  const tarjeta = evento.target.closest(".tarjeta-producto");
  if (!tarjeta) return;
  const rect = tarjeta.getBoundingClientRect();
  tarjeta.style.setProperty("--mx", evento.clientX - rect.left + "px");
  tarjeta.style.setProperty("--my", evento.clientY - rect.top + "px");
});

// Paralaje del visual del hero (solo con puntero fino, no en celular)
if (window.matchMedia("(hover: hover)").matches) {
  const heroe = $(".heroe");
  heroe.addEventListener("mousemove", (evento) => {
    const rect = heroe.getBoundingClientRect();
    heroe.style.setProperty("--px", ((evento.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    heroe.style.setProperty("--py", ((evento.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  });
  heroe.addEventListener("mouseleave", () => {
    heroe.style.setProperty("--px", 0);
    heroe.style.setProperty("--py", 0);
  });
}

/* =====================================================================
   13) DATOS DE CONFIGURACIÓN VERTIDOS EN LA PÁGINA + ARRANQUE
===================================================================== */
function aplicarConfig() {
  // WhatsApp (flotante, contacto y pie)
  const enlaceWA = linkWhatsApp("Hola Bit-IO, me gustaría sobre sus productos y servicios.");
  $("#whatsapp-flotante").href = enlaceWA;
  $("#contacto-whatsapp").href = enlaceWA;
  $("#contacto-whatsapp-numero").textContent = CONFIG.telefonoVisible;
  $("#pie-whatsapp").href = enlaceWA;
  $("#pie-whatsapp-numero").textContent = CONFIG.telefonoVisible;
  $("#pie-whatsapp-numero").href = enlaceWA;
  // Instagram (tarjeta de contacto e ícono del pie)
  $("#contacto-instagram").href = CONFIG.redes.instagram;
  $("#contacto-instagram-texto").textContent = CONFIG.instagramUsuario;
  $("#red-instagram").href = CONFIG.redes.instagram;
  // Correo
  $("#contacto-correo").href = "mailto:" + CONFIG.email;
  $("#contacto-correo-texto").textContent = CONFIG.email;
  $("#pie-correo").href = "mailto:" + CONFIG.email;
  $("#pie-correo-texto").textContent = CONFIG.email;
  // Horario, dirección, mapa y redes
  $$(".dato-horario").forEach((el) => (el.textContent = CONFIG.horario));
  $$(".dato-direccion").forEach((el) => (el.textContent = CONFIG.direccion));
  $("#mapa-bitio").src = CONFIG.mapa;
  $("#red-facebook").href = CONFIG.redes.facebook;
  $("#red-tiktok").href = CONFIG.redes.tiktok;
  // GitHub (botón principal de la sección e ícono del pie)
  $("#enlace-github-principal").href = CONFIG.github;
  $("#red-github").href = CONFIG.github;
  // Botones de cotización de servicios
  $$(".boton-cotizar").forEach((boton) => {
    boton.href = linkWhatsApp("Hola Bit-IO, quiero cotizar un servicio de " + boton.dataset.servicio + ".");
  });
  // Año del copyright
  $("#anio").textContent = new Date().getFullYear();
}

// Arranque
renderFiltros();
renderCategoriasDestacadas();
renderCatalogo();
renderGithub();
renderCarrito();
actualizarContador();
poblarSelect();
aplicarConfig();
$("#apartado-fecha").min = new Date().toISOString().split("T")[0]; // no permite fechas pasadas
