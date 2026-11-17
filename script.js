/* =====================================================================
   BIT-IO — SCRIPT COMPLETO
===================================================================== */

/* =====================================================================
   1) CONFIGURACIÓN GENERAL
===================================================================== */
const CONFIG = {
  whatsapp: "522281722199",
  telefonoVisible: "+52 2281722199",
  email: "julioyaelcar@gmail.com",
  horario: "Lun a Vie: 7:00–15:00 · Sáb: 6:00–15:00",
  direccion: "Carr. Nueva Xalapa-Coatepec 108, Coatepec, 91500 Coatepec, Ver.",
  mapa: "https://maps.google.com/maps?q=Carr.%20Nueva%20Xalapa-Coatepec%20108%2C%20Coatepec%2C%2091500%20Coatepec%2C%20Ver.&t=&z=16&ie=UTF8&iwloc=&output=embed",
  github: "https://github.com/JulioYCardenas",
  instagramUsuario: "@electronica_bitio",
  hoja: "", // <- pega aquí el enlace CSV de tu Google Sheet
  redes: {
    facebook: "#",
    instagram: "https://www.instagram.com/electronica_bitio/",
    tiktok: "#"
  }
};

/* =====================================================================
   2) GRUPOS, SUBCATEGORÍAS Y PRODUCTOS
===================================================================== */
const GRUPOS = [
  {
    id: "pasivos", nombre: "Pasivos",
    subs: [
      { id: "resistencias",   nombre: "Resistencias",               variantes: true },
      { id: "potenciometros", nombre: "Potenciómetros",             variantes: true },
      { id: "cap-ceramicos",  nombre: "Capacitores cerámicos",      variantes: true },
      { id: "cap-electro",    nombre: "Capacitores electrolíticos", variantes: true }
    ]
  },
  {
    id: "semiconductores", nombre: "Semiconductores",
    subs: [
      { id: "transistores", nombre: "Transistores", variantes: true },
      { id: "diodos",       nombre: "Diodos",       variantes: true },
      { id: "leds",         nombre: "LEDs",         variantes: true },
      { id: "mosfets",      nombre: "MOSFETs",      variantes: true },
      { id: "zener",        nombre: "Zener",        variantes: true }
    ]
  },
  {
    id: "ci", nombre: "CI",
    subs: [
      { id: "logicas",  nombre: "Compuertas lógicas", variantes: true  },
      { id: "timer555", nombre: "Timer 555",          variantes: false },
      { id: "opamps",   nombre: "Op-Amps",            variantes: true  }
    ]
  },
  {
    id: "microcontroladores", nombre: "Microcontroladores",
    subs: [
      { id: "arduino",   nombre: "Arduino",           variantes: false },
      { id: "esp32",     nombre: "ESP32",             variantes: false },
      { id: "raspipico", nombre: "Raspberry Pi Pico", variantes: false }
    ]
  },
  {
    id: "sensores", nombre: "Sensores",
    subs: [
      { id: "ultrasonido", nombre: "Ultrasonido", variantes: false },
      { id: "qtr",         nombre: "QTR",         variantes: false },
      { id: "imu",         nombre: "IMU",         variantes: false },
      { id: "temperatura", nombre: "Temperatura", variantes: false }
    ]
  },
  {
    id: "actuadores", nombre: "Actuadores",
    subs: [
      { id: "motores-dc", nombre: "Motores DC", variantes: false },
      { id: "steppers",   nombre: "Steppers",   variantes: false },
      { id: "servos",     nombre: "Servos",     variantes: false }
    ]
  }
];

const CATEGORIAS = GRUPOS.map(g => g.nombre);

const PRODUCTOS = [
  { id: "resistencias", sub: "resistencias", nombre: "Resistencias", categoria: "Pasivos",
    descripcion: "Resistencias de carbón 1/4 W. Elige el valor que necesitas.",
    precio: 1, stock: 200,
    variantes: [
      { valor: "100 Ω",  precio: 1, stock: 40 },
      { valor: "220 Ω",  precio: 1, stock: 40 },
      { valor: "330 Ω",  precio: 1, stock: 35 },
      { valor: "470 Ω",  precio: 1, stock: 30 },
      { valor: "1 kΩ",   precio: 1, stock: 40 },
      { valor: "2.2 kΩ", precio: 1, stock: 25 },
      { valor: "4.7 kΩ", precio: 1, stock: 25 },
      { valor: "10 kΩ",  precio: 1, stock: 40 },
      { valor: "47 kΩ",  precio: 1, stock: 20 },
      { valor: "100 kΩ", precio: 1, stock: 20 }
    ]
  },
  { id: "kit-resistencias", sub: "resistencias", nombre: "Kit 100 resistencias surtidas",
    categoria: "Pasivos", descripcion: "Los valores más usados, listos para cualquier circuito.",
    precio: 95, stock: 12 },
  { id: "cap-ceramico", sub: "cap-ceramicos", nombre: "Capacitores cerámicos",
    categoria: "Pasivos", descripcion: "Desacopla la alimentación de tus chips.",
    precio: 1, stock: 150,
    variantes: [
      { valor: "10 pF",  precio: 1, stock: 30 },
      { valor: "100 pF", precio: 1, stock: 30 },
      { valor: "10 nF",  precio: 1, stock: 30 },
      { valor: "100 nF", precio: 1, stock: 60 }
    ]
  },
  { id: "cap-electro", sub: "cap-electro", nombre: "Capacitores electrolíticos",
    categoria: "Pasivos", descripcion: "Para fuentes de poder, 555 y amplificadores.",
    precio: 3, stock: 80,
    variantes: [
      { valor: "10 µF 16 V",  precio: 3, stock: 20 },
      { valor: "47 µF 16 V",  precio: 3, stock: 20 },
      { valor: "100 µF 16 V", precio: 3, stock: 25 },
      { valor: "470 µF 25 V", precio: 4, stock: 15 }
    ]
  },
  { id: "transistores", sub: "transistores", nombre: "Transistores BJT",
    categoria: "Semiconductores", descripcion: "Para conmutar cargas y amplificar señales.",
    precio: 5, stock: 75,
    variantes: [
      { valor: "2N2222 NPN",        precio: 5,  stock: 20 },
      { valor: "2N3904 NPN",        precio: 5,  stock: 20 },
      { valor: "2N3906 PNP",        precio: 5,  stock: 20 },
      { valor: "TIP120 Darlington", precio: 30, stock: 15 }
    ]
  },
  { id: "leds", sub: "leds", nombre: "LEDs 5 mm",
    categoria: "Semiconductores", descripcion: "LEDs difusos de 5 mm para indicadores y proyectos.",
    precio: 2, stock: 200,
    variantes: [
      { valor: "Rojo",     precio: 2, stock: 60 },
      { valor: "Verde",    precio: 2, stock: 60 },
      { valor: "Azul",     precio: 2, stock: 40 },
      { valor: "Amarillo", precio: 2, stock: 40 }
    ]
  },
  { id: "diodos", sub: "diodos", nombre: "Diodos",
    categoria: "Semiconductores", descripcion: "Rectificación y protección en tus circuitos.",
    precio: 3, stock: 80,
    variantes: [
      { valor: "1N4007", precio: 3, stock: 40 },
      { valor: "1N4148", precio: 2, stock: 40 }
    ]
  },
  { id: "timer555", sub: "timer555", nombre: "Timer NE555",
    categoria: "CI", descripcion: "El CI más versátil: temporizadores, osciladores y PWM.",
    precio: 10, stock: 25 },
  { id: "arduino-uno", sub: "arduino", nombre: "Arduino Uno R3 (compatible)",
    categoria: "Microcontroladores", descripcion: "La opción más común para empezar a programar electrónica.",
    precio: 320, stock: 9 },
  { id: "esp32", sub: "esp32", nombre: "ESP32 DevKit WiFi + Bluetooth",
    categoria: "Microcontroladores", descripcion: "Doble núcleo y conectividad inalámbrica para IoT.",
    precio: 185, stock: 11 },
  { id: "raspi-pico", sub: "raspipico", nombre: "Raspberry Pi Pico",
    categoria: "Microcontroladores", descripcion: "RP2040, programable en MicroPython y C/C++.",
    precio: 150, stock: 7 },
  { id: "hcsr04", sub: "ultrasonido", nombre: "Sensor ultrasónico HC-SR04",
    categoria: "Sensores", descripcion: "Mide distancias de 2 a 400 cm.",
    precio: 45, stock: 18 },
  { id: "dht11", sub: "temperatura", nombre: "Sensor DHT11 temperatura y humedad",
    categoria: "Sensores", descripcion: "Lecturas digitales para estaciones climáticas.",
    precio: 38, stock: 16 },
  { id: "motor-dc", sub: "motores-dc", nombre: "Motor DC 3–6 V con caja reductora",
    categoria: "Actuadores", descripcion: "Para carritos y ruedas escolares.",
    precio: 55, stock: 10 },
  { id: "stepper-28byj", sub: "steppers", nombre: "Motor paso a paso 28BYJ-48 + ULN2003",
    categoria: "Actuadores", descripcion: "Movimientos precisos para brazos robóticos.",
    precio: 85, stock: 8 },
  { id: "sg90", sub: "servos", nombre: "Servomotor SG90 9 g",
    categoria: "Actuadores", descripcion: "Giro 0° a 180°, compatible con Arduino y ESP32.",
    precio: 60, stock: 14 }
];

/* =====================================================================
   3) PROYECTOS DE GITHUB
===================================================================== */
const PROYECTOS_GITHUB = [
  { titulo: "Primer circuito: LED parpadeante con Arduino", nivel: "Básico",
    descripcion: "Guía paso a paso para prender y apagar un LED desde el código, con el circuito comentado pieza por pieza.", enlace: "#" },
  { titulo: "Robot evasor de obstáculos con HC-SR04", nivel: "Intermedio",
    descripcion: "Cómo armar y programar un carrito que esquiva paredes usando sensor ultrasónico y driver de motores.", enlace: "#" },
  { titulo: "Estación de temperatura con ESP32 y DHT11", nivel: "Intermedio",
    descripcion: "Lee temperatura y humedad y consúltala desde tu celular por WiFi con una página sencilla.", enlace: "#" }
];

/* =====================================================================
   4) UTILIDADES E ÍCONOS
===================================================================== */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function formatoPrecio(numero) {
  return "$" + numero.toLocaleString("es-MX");
}

function linkWhatsApp(mensaje) {
  return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(mensaje);
}

const ICONO_CHIP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3"/></svg>';

const ICONOS_CATEGORIA = {
  "Pasivos":            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h3l2.5-6 3.5 12 3.5-12 3.5 12 2.5-6H22"/></svg>',
  "Semiconductores":    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11" r="6"/><path d="M12 2v3M8.5 21l1.2-4M15.5 21l-1.2-4M9 11h6"/></svg>',
  "CI":                 ICONO_CHIP,
  "Microcontroladores": ICONO_CHIP,
  "Sensores":           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="17" r="2"/><path d="M8.5 12.5a5 5 0 0 1 7 0M5.5 9.5a9 9 0 0 1 13 0"/></svg>',
  "Actuadores":         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="11" height="9" rx="2"/><path d="M17 11h4M17 14h4M12 17v4M9 21h6"/><circle cx="11.5" cy="12.5" r="1.8"/></svg>'
};

/* =====================================================================
   5) CATÁLOGO: grupos, subcategorías, tarjetas
===================================================================== */
let grupoActivo   = "Todas";
let subActiva     = null;
let textoBusqueda = "";

function renderFiltros() {
  const contGrupos = $("#filtro-grupos");
  const contSubs   = $("#filtro-subs");
  contGrupos.innerHTML = "";
  contSubs.innerHTML   = "";

  const todos = document.createElement("button");
  todos.type = "button";
  todos.className = "chip" + (grupoActivo === "Todas" ? " activa" : "");
  todos.textContent = "Todos";
  todos.addEventListener("click", () => {
    grupoActivo = "Todas"; subActiva = null;
    renderFiltros(); renderCatalogo();
  });
  contGrupos.appendChild(todos);

  GRUPOS.forEach(g => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (grupoActivo === g.id ? " activa" : "");
    btn.textContent = g.nombre;
    btn.addEventListener("click", () => {
      grupoActivo = g.id; subActiva = null;
      renderFiltros(); renderCatalogo();
    });
    contGrupos.appendChild(btn);
  });

  if (grupoActivo !== "Todas") {
    const grupo = GRUPOS.find(g => g.id === grupoActivo);
    if (grupo) {
      contSubs.classList.remove("oculto");
      grupo.subs.forEach(s => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "chip chip-sub" + (subActiva === s.id ? " activa" : "");
        btn.textContent = s.nombre;
        btn.addEventListener("click", () => {
          subActiva = subActiva === s.id ? null : s.id;
          renderFiltros(); renderCatalogo();
        });
        contSubs.appendChild(btn);
      });
    }
  } else {
    contSubs.classList.add("oculto");
  }
}

function productosFiltrados() {
  const texto = textoBusqueda.trim().toLowerCase();
  return PRODUCTOS.filter(p => {
    if (grupoActivo !== "Todas") {
      const grupo = GRUPOS.find(g => g.id === grupoActivo);
      if (!grupo) return false;
      if (!grupo.subs.some(s => s.id === p.sub)) return false;
      if (subActiva && p.sub !== subActiva) return false;
    }
    if (texto) return (p.nombre + " " + p.descripcion).toLowerCase().includes(texto);
    return true;
  });
}

function precioMostrar(p) {
  // Sin precio definido o precio 0 -> "Preguntar por disponibilidad"
  if (!p.precio || p.precio === 0) return "Preguntar por disponibilidad";
  if (p.variantes && p.variantes.length) {
    const precios = p.variantes.map(v => v.precio).filter(x => x > 0);
    if (!precios.length) return "Preguntar por disponibilidad";
    const min = Math.min(...precios);
    const max = Math.max(...precios);
    return min === max ? formatoPrecio(min) : "Desde " + formatoPrecio(min);
  }
  return formatoPrecio(p.precio);
}

function stockMostrar(p) {
  if (p.variantes && p.variantes.length) {
    const total = p.variantes.reduce((s, v) => s + (v.stock || 0), 0);
    if (total === 0) return { texto: "Agotado", agotado: true };
    return { texto: "Stock: " + total, agotado: false };
  }
  if (p.stock === 0) return { texto: "Agotado", agotado: true };
  if (!p.stock) return { texto: "Preguntar disponibilidad", agotado: false };
  return { texto: "Stock: " + p.stock, agotado: false };
}

function tarjetaHTML(producto, indice) {
  const stockInfo = stockMostrar(producto);
  const agotado   = stockInfo.agotado;
  const foto = producto.imagen
    ? `<img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" onerror="this.remove()">`
    : "";
  return `
  <article class="tarjeta-producto" style="--i:${indice}">
    <div class="producto-img">
      ${ICONO_CHIP}${foto}
      <span class="producto-img-etiqueta">${producto.categoria}</span>
    </div>
    <div class="tarjeta-cuerpo">
      <h3 class="tarjeta-nombre">${producto.nombre}</h3>
      <p class="tarjeta-desc">${producto.descripcion}</p>
      <div class="tarjeta-info">
        <span class="tarjeta-precio">${precioMostrar(producto)}</span>
        <span class="tarjeta-stock${agotado ? " agotado" : ""}">${stockInfo.texto}</span>
      </div>
      <button type="button" class="btn btn-neon btn-bloque"
        onclick="abrirDetalle('${producto.id}')"
        ${agotado ? "disabled" : ""}>Agregar al carrito</button>
      <button type="button" class="btn btn-borde btn-bloque"
        onclick="abrirApartado('${producto.id}')"
        ${agotado ? "disabled" : ""}>Apartar</button>
    </div>
  </article>`;
}

function renderCatalogo() {
  const contenedor = $("#grid-productos");
  const lista = productosFiltrados();
  if (lista.length === 0) {
    contenedor.innerHTML = '<p class="sin-resultados">Sin resultados… prueba con otra palabra o cambia la categoría.</p>';
    return;
  }
  contenedor.innerHTML = lista.map((p, i) => tarjetaHTML(p, i)).join("");
}

function renderCategoriasDestacadas() {
  const contenedor = $("#categorias-destacadas");
  if (!contenedor) return;
  GRUPOS.forEach(g => {
    const cantidad = PRODUCTOS.filter(p => g.subs.some(s => s.id === p.sub)).length;
    const boton    = document.createElement("button");
    boton.type     = "button";
    boton.className = "cat-tarjeta";
    const icono = ICONOS_CATEGORIA[g.nombre] || ICONO_CHIP;
    boton.innerHTML = icono +
      '<span class="cat-nombre">' + g.nombre + '</span>' +
      '<span class="cat-cantidad">' + cantidad + ' productos</span>';
    boton.addEventListener("click", () => irACategoria(g.id));
    contenedor.appendChild(boton);
  });
}

function irACategoria(grupoId) {
  grupoActivo = grupoId; subActiva = null;
  textoBusqueda = ""; $("#buscador").value = "";
  renderFiltros(); renderCatalogo();
  $("#catalogo").scrollIntoView({ behavior: "smooth" });
}

/* =====================================================================
   5b) MODAL DE DETALLE
===================================================================== */
let detalleIdActual = null;
let detalleVariante = null;

function stockDetalle() {
  const p = PRODUCTOS.find(x => x.id === detalleIdActual);
  if (!p) return 0;
  if (p.variantes && detalleVariante) {
    const v = p.variantes.find(x => x.valor === detalleVariante);
    return v ? (v.stock || 0) : 0;
  }
  return p.stock || 0;
}

function precioDetalle() {
  const p = PRODUCTOS.find(x => x.id === detalleIdActual);
  if (!p) return 0;
  if (p.variantes && detalleVariante) {
    const v = p.variantes.find(x => x.valor === detalleVariante);
    return v ? (v.precio || 0) : (p.precio || 0);
  }
  return p.precio || 0;
}

function claveCarrito() {
  return detalleVariante ? detalleIdActual + "||" + detalleVariante : detalleIdActual;
}

function actualizarDetalleUI() {
  const p = PRODUCTOS.find(x => x.id === detalleIdActual);
  if (!p) return;
  const stock     = stockDetalle();
  const precio    = precioDetalle();
  const enCarrito = carrito[claveCarrito()] || 0;

  // Precio
  $("#detalle-precio").textContent = precio > 0 ? formatoPrecio(precio) : "Preguntar por disponibilidad";

  // Stock
  const stockEl = $("#detalle-stock-txt");
  if (stock > 0) { stockEl.textContent = "Stock disponible: " + stock; stockEl.className = "detalle-stock"; }
  else if (!p.stock && !p.variantes) { stockEl.textContent = "Preguntar por disponibilidad"; stockEl.className = "detalle-stock"; }
  else { stockEl.textContent = "Agotado"; stockEl.className = "detalle-stock agotado"; }

  // Cantidad
  const max = Math.max(0, stock - enCarrito);
  const qty = parseInt($("#detalle-qty").value) || 1;
  $("#detalle-qty").max = max > 0 ? max : 1;
  if (qty > max && max > 0) $("#detalle-qty").value = max;

  // Ya en carrito
  const infoCarrito = $("#detalle-en-carrito");
  if (enCarrito > 0) {
    infoCarrito.textContent = "Ya tienes " + enCarrito + " en el carrito.";
    infoCarrito.classList.remove("oculto");
  } else {
    infoCarrito.classList.add("oculto");
  }

  // Botón agregar
  const sinStock  = stock === 0;
  const sinVariante = p.variantes && p.variantes.length && !detalleVariante;
  $("#detalle-agregar").disabled = sinStock || sinVariante;
  $("#detalle-apartar").disabled = stock === 0;
}

function abrirDetalle(id) {
  const p = PRODUCTOS.find(x => x.id === id);
  if (!p) return;
  detalleIdActual = id;
  detalleVariante = null;
  focoPrevio      = document.activeElement;

  $("#detalle-categoria").textContent = p.categoria;
  $("#detalle-nombre").textContent    = p.nombre;
  $("#detalle-qty").value             = 1;

  // Foto
  if (p.imagen) {
    $("#detalle-img-foto").src = p.imagen;
    $("#detalle-img-foto").alt = p.nombre;
    $("#detalle-img-foto").classList.remove("oculto");
    $("#detalle-img-placeholder").classList.add("oculto");
  } else {
    $("#detalle-img-foto").classList.add("oculto");
    $("#detalle-img-placeholder").classList.remove("oculto");
  }

  // Variantes
  const contVar  = $("#detalle-variantes");
  const chipsVar = $("#detalle-variantes-chips");
  chipsVar.innerHTML = "";
  if (p.variantes && p.variantes.length) {
    contVar.classList.remove("oculto");
    p.variantes.forEach(v => {
      const btn = document.createElement("button");
      btn.type  = "button";
      btn.className = "chip chip-variante" + (v.stock === 0 ? " agotado-chip" : "");
      btn.textContent = v.valor;
      if (v.stock === 0) btn.disabled = true;
      btn.addEventListener("click", () => {
        detalleVariante = v.valor;
        chipsVar.querySelectorAll(".chip-variante").forEach(c => c.classList.remove("activa"));
        btn.classList.add("activa");
        actualizarDetalleUI();
      });
      chipsVar.appendChild(btn);
    });
  } else {
    contVar.classList.add("oculto");
  }

  actualizarDetalleUI();

  const fondo = $("#detalle-fondo");
  fondo.classList.add("abierto");
  fondo.removeAttribute("aria-hidden");
  document.body.classList.add("detalle-abierto");
  setTimeout(() => $("#detalle-cerrar").focus(), 50);
}

function cerrarDetalle() {
  if (!document.body.classList.contains("detalle-abierto")) return;
  $("#detalle-fondo").classList.remove("abierto");
  $("#detalle-fondo").setAttribute("aria-hidden", "true");
  document.body.classList.remove("detalle-abierto");
  if (focoPrevio) focoPrevio.focus();
}

$("#detalle-menos").addEventListener("click", () => {
  const input = $("#detalle-qty");
  const val   = parseInt(input.value) || 1;
  if (val > 1) { input.value = val - 1; actualizarDetalleUI(); }
});
$("#detalle-mas").addEventListener("click", () => {
  const input = $("#detalle-qty");
  const max   = parseInt(input.max) || 999;
  const val   = parseInt(input.value) || 1;
  if (val < max) { input.value = val + 1; actualizarDetalleUI(); }
});
$("#detalle-qty").addEventListener("input", actualizarDetalleUI);

$("#detalle-agregar").addEventListener("click", () => {
  const p = PRODUCTOS.find(x => x.id === detalleIdActual);
  if (!p) return;
  const clave  = claveCarrito();
  const stock  = stockDetalle();
  const actual = carrito[clave] || 0;
  const qty    = Math.max(1, parseInt($("#detalle-qty").value) || 1);
  const nueva  = Math.min(actual + qty, stock);
  if (nueva <= 0) return;
  carrito[clave] = nueva;
  guardarCarrito();
  actualizarContador();
  renderCarrito();
  animarIconoCarrito();
  cerrarDetalle();
});

$("#detalle-apartar").addEventListener("click", () => {
  const id = detalleIdActual;
  cerrarDetalle();
  abrirApartado(id);
});

$("#detalle-fondo").addEventListener("click", e => {
  if (e.target === e.currentTarget) cerrarDetalle();
});
$("#detalle-cerrar").addEventListener("click", cerrarDetalle);

/* =====================================================================
   5c) ANIMACIÓN DEL ÍCONO DEL CARRITO
===================================================================== */
function animarIconoCarrito() {
  const btn = $("#btn-carrito");
  btn.classList.remove("carrito-pop");
  void btn.offsetWidth;
  btn.classList.add("carrito-pop");
  btn.addEventListener("animationend", () => btn.classList.remove("carrito-pop"), { once: true });
}

/* =====================================================================
   6) GITHUB
===================================================================== */
function renderGithub() {
  const contenedor = $("#grid-github");
  contenedor.innerHTML = PROYECTOS_GITHUB.map((proyecto, i) => `
  <article class="tarjeta-github" data-revelar style="--i:${i}">
    <div class="tarjeta-github-cabecera">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      <span class="nivel nivel-${proyecto.nivel.toLowerCase()}">${proyecto.nivel}</span>
    </div>
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <a class="tarjeta-github-enlace" href="${proyecto.enlace}" target="_blank" rel="noopener">Ver guía en GitHub →</a>
  </article>`).join("");
  $$("#grid-github [data-revelar]").forEach(el => observador.observe(el));
}

/* =====================================================================
   7) CARRITO (claves = "id" o "id||variante")
===================================================================== */
let carrito = {};
try { carrito = JSON.parse(localStorage.getItem("bitio_carrito")) || {}; } catch(e) { carrito = {}; }

function guardarCarrito() { localStorage.setItem("bitio_carrito", JSON.stringify(carrito)); }

function parseClave(clave) {
  const idx = clave.indexOf("||");
  if (idx === -1) return { id: clave, variante: null };
  return { id: clave.slice(0, idx), variante: clave.slice(idx + 2) };
}

function idsValidos() {
  return Object.keys(carrito).filter(clave => {
    const { id, variante } = parseClave(clave);
    const p = PRODUCTOS.find(x => x.id === id);
    if (!p) return false;
    if (variante && p.variantes) return p.variantes.some(v => v.valor === variante);
    return true;
  });
}

function precioEnCarrito(clave) {
  const { id, variante } = parseClave(clave);
  const p = PRODUCTOS.find(x => x.id === id);
  if (!p) return 0;
  if (variante && p.variantes) {
    const v = p.variantes.find(x => x.valor === variante);
    return v ? (v.precio || 0) : (p.precio || 0);
  }
  return p.precio || 0;
}

function nombreEnCarrito(clave) {
  const { id, variante } = parseClave(clave);
  const p = PRODUCTOS.find(x => x.id === id);
  if (!p) return "Producto no disponible";
  return variante ? p.nombre + " · " + variante : p.nombre;
}

function cambiarCantidad(clave, cambio) {
  const { id, variante } = parseClave(clave);
  const p = PRODUCTOS.find(x => x.id === id);
  if (!p) return;
  const stock = variante && p.variantes
    ? (p.variantes.find(v => v.valor === variante) || {}).stock || 0
    : (p.stock || 0);
  const nueva = (carrito[clave] || 0) + cambio;
  if (nueva <= 0) delete carrito[clave];
  else if (nueva <= stock) carrito[clave] = nueva;
  guardarCarrito(); actualizarContador(); renderCarrito();
}

function quitarDelCarrito(clave) {
  delete carrito[clave];
  guardarCarrito(); actualizarContador(); renderCarrito();
}

function totalCarrito() {
  return idsValidos().reduce((suma, clave) => {
    const precio = precioEnCarrito(clave);
    return suma + precio * carrito[clave];
  }, 0);
}

function actualizarContador() {
  const total = idsValidos().reduce((s, clave) => s + carrito[clave], 0);
  const c = $("#carrito-contador");
  c.textContent = total;
  c.classList.toggle("oculto", total === 0);
}

function renderCarrito() {
  const cont   = $("#carrito-items");
  const claves = Object.keys(carrito);
  if (claves.length === 0) {
    cont.innerHTML = '<div class="carrito-vacio"><p>Tu carrito está vacío.</p><span>[ agrega productos desde el catálogo ]</span></div>';
    $("#carrito-total").textContent = formatoPrecio(0);
    return;
  }
  cont.innerHTML = claves.map(clave => {
    const { id, variante } = parseClave(clave);
    const p       = PRODUCTOS.find(x => x.id === id);
    const claveJs = clave.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    const quitar  = `<button type="button" class="carrito-quitar" aria-label="Eliminar" onclick="quitarDelCarrito('${claveJs}')">×</button>`;
    if (!p) {
      return `<div class="carrito-item carrito-item-nodisponible">
        <div><p class="carrito-item-nombre">Producto ya no disponible</p>
        <p class="carrito-item-precio">Quítalo del carrito.</p></div>
        <span></span>${quitar}</div>`;
    }
    const precio    = precioEnCarrito(clave);
    const nombre    = nombreEnCarrito(clave);
    const precioStr = precio > 0 ? formatoPrecio(precio) + " c/u" : "Preguntar por disponibilidad";
    return `<div class="carrito-item">
      <div>
        <p class="carrito-item-nombre">${nombre}</p>
        <p class="carrito-item-precio">${precioStr}</p>
      </div>
      <div class="carrito-cantidad">
        <button type="button" aria-label="Restar" onclick="cambiarCantidad('${claveJs}',-1)">−</button>
        <span>${carrito[clave]}</span>
        <button type="button" aria-label="Sumar"  onclick="cambiarCantidad('${claveJs}',1)">+</button>
      </div>${quitar}</div>`;
  }).join("");
  $("#carrito-total").textContent = formatoPrecio(totalCarrito());
}

let focoPrevio = null;

function abrirCarrito() {
  focoPrevio = document.activeElement;
  document.body.classList.add("carrito-abierto");
  $("#btn-cerrar-carrito").focus();
}

function cerrarCarrito() {
  if (!document.body.classList.contains("carrito-abierto")) return;
  document.body.classList.remove("carrito-abierto");
  if (focoPrevio) focoPrevio.focus();
}

function enviarPedidoWhatsApp() {
  const claves = idsValidos();
  if (claves.length === 0) return;
  const lineas = claves.map(clave => {
    const precio     = precioEnCarrito(clave);
    const nombre     = nombreEnCarrito(clave);
    const precioLinea = precio > 0
      ? formatoPrecio(precio * carrito[clave])
      : "precio a confirmar";
    return "• " + carrito[clave] + " × " + nombre + " — " + precioLinea;
  });
  const mensaje = "Hola Bit-IO, quiero hacer un pedido:\n" + lineas.join("\n") +
    "\nTotal: " + formatoPrecio(totalCarrito()) + " MXN\n\n¿Me ayudan a confirmar la entrega? Gracias.";
  window.open(linkWhatsApp(mensaje), "_blank");
}

/* =====================================================================
   8) APARTADOS
===================================================================== */
function poblarSelect() {
  const select = $("#apartado-producto");
  select.innerHTML = "";
  PRODUCTOS.forEach(p => {
    const o = document.createElement("option");
    o.value = p.id;
    o.textContent = p.nombre + (p.precio > 0 ? " — " + formatoPrecio(p.precio) : " — Preguntar precio");
    select.appendChild(o);
  });
}

function actualizarLimiteApartado() {
  const producto = PRODUCTOS.find(p => p.id === $("#apartado-producto").value);
  const input    = $("#apartado-cantidad");
  const ayuda    = $("#apartado-ayuda");
  if (!producto) { input.removeAttribute("max"); ayuda.textContent = ""; return; }
  const stock = producto.stock || 0;
  if (stock > 0) {
    input.max = stock;
    if (Number(input.value) > stock) input.value = stock;
    const msg = "Hola Bit-IO, necesito más de " + stock + " piezas de: " + producto.nombre + ". ¿Me ayudan?";
    ayuda.innerHTML = "Máximo " + stock + " piezas disponibles. ¿Necesitas más? " +
      '<a href="' + linkWhatsApp(msg) + '" target="_blank" rel="noopener">Pídelas por WhatsApp</a>';
  } else {
    input.removeAttribute("max");
    ayuda.textContent = "Stock no especificado. Te confirmaremos disponibilidad.";
  }
}

function abrirApartado(id) {
  focoPrevio = document.activeElement;
  $("#apartado-producto").value = id;
  actualizarLimiteApartado();
  document.body.classList.add("apartado-abierto");
  setTimeout(() => $("#apartado-nombre").focus(), 50);
}

function cerrarApartado() {
  if (!document.body.classList.contains("apartado-abierto")) return;
  document.body.classList.remove("apartado-abierto");
  if (focoPrevio) focoPrevio.focus();
}

function enviarApartado(evento) {
  evento.preventDefault();
  const datos    = new FormData(evento.target);
  const producto = PRODUCTOS.find(p => p.id === datos.get("producto"));
  const mensaje  = "Hola Bit-IO, quiero apartar un producto:\n" +
    "• Producto: "  + producto.nombre       + "\n" +
    "• Cantidad: "  + datos.get("cantidad") + "\n" +
    "• Nombre: "    + datos.get("nombre")   + "\n" +
    "• Teléfono: "  + datos.get("telefono") + "\n" +
    "• Fecha de recolección: " + datos.get("fecha") + "\n\n" +
    "¿Me confirman disponibilidad y punto de entrega? Gracias.";
  window.open(linkWhatsApp(mensaje), "_blank");
  evento.target.reset();
  cerrarApartado();
}

$("#apartado-producto").addEventListener("change", actualizarLimiteApartado);

/* =====================================================================
   9) MENÚ MÓVIL
===================================================================== */
function alternarMenu() {
  const abierto = document.body.classList.toggle("menu-abierto");
  $("#btn-menu").setAttribute("aria-expanded", abierto);
}
function cerrarMenu() {
  document.body.classList.remove("menu-abierto");
  $("#btn-menu").setAttribute("aria-expanded", "false");
}
$$("#nav-enlaces a").forEach(a => a.addEventListener("click", cerrarMenu));

/* =====================================================================
   10) TEMA OSCURO / CLARO
===================================================================== */
function alternarTema() {
  const claro = document.documentElement.classList.toggle("tema-claro");
  try { localStorage.setItem("bitio_tema", claro ? "claro" : "oscuro"); } catch(e) {}
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = claro ? "#ffffff" : "#0b0e13";
}

/* =====================================================================
   11) BUSCADOR
===================================================================== */
$("#buscador").addEventListener("input", e => {
  textoBusqueda = e.target.value;
  renderCatalogo();
});

/* =====================================================================
   12) SCROLL REVEAL + BRILLO EN TARJETAS
===================================================================== */
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("revelado");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.12 });
$$("[data-revelar]").forEach(el => observador.observe(el));

$("#grid-productos").addEventListener("mousemove", e => {
  const tarjeta = e.target.closest(".tarjeta-producto");
  if (!tarjeta) return;
  const rect = tarjeta.getBoundingClientRect();
  tarjeta.style.setProperty("--mx", e.clientX - rect.left + "px");
  tarjeta.style.setProperty("--my", e.clientY - rect.top + "px");
});

if (window.matchMedia("(hover: hover)").matches) {
  const heroe = $(".heroe");
  heroe.addEventListener("mousemove", e => {
    const rect = heroe.getBoundingClientRect();
    heroe.style.setProperty("--px", ((e.clientX - rect.left) / rect.width  - 0.5).toFixed(3));
    heroe.style.setProperty("--py", ((e.clientY - rect.top)  / rect.height - 0.5).toFixed(3));
  });
  heroe.addEventListener("mouseleave", () => {
    heroe.style.setProperty("--px", 0);
    heroe.style.setProperty("--py", 0);
  });
}

/* =====================================================================
   13) TECLADO: Esc + trampa de Tab
===================================================================== */
$("#carrito-overlay").addEventListener("click", cerrarCarrito);
$("#apartado-fondo").addEventListener("click", e => { if (e.target === e.currentTarget) cerrarApartado(); });

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    cerrarDetalle(); cerrarCarrito(); cerrarApartado(); cerrarMenu();
    return;
  }
  if (e.key !== "Tab") return;
  const panel = document.body.classList.contains("detalle-abierto")   ? $(".detalle-modal")
    : document.body.classList.contains("apartado-abierto") ? $(".modal")
    : document.body.classList.contains("carrito-abierto")  ? $("#carrito-panel") : null;
  if (!panel) return;
  const foco = Array.from(panel.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled])'));
  if (!foco.length) return;
  const primero = foco[0], ultimo = foco[foco.length - 1];
  if (!panel.contains(document.activeElement))             { e.preventDefault(); primero.focus(); }
  else if (e.shiftKey  && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
  else if (!e.shiftKey && document.activeElement === ultimo)  { e.preventDefault(); primero.focus(); }
});

/* =====================================================================
   14) DATOS DESDE GOOGLE SHEETS (precio, stock y foto)
===================================================================== */
function leerCSV(texto) {
  const filas = [];
  let fila = [], campo = "", comillas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (comillas) {
      if (c === '"' && texto[i+1] === '"') { campo += '"'; i++; }
      else if (c === '"') comillas = false;
      else campo += c;
    } else if (c === '"') comillas = true;
    else if (c === ",") { fila.push(campo); campo = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && texto[i+1] === "\n") i++;
      fila.push(campo); filas.push(fila); fila = []; campo = "";
    } else campo += c;
  }
  if (campo !== "" || fila.length) { fila.push(campo); filas.push(fila); }
  return filas;
}

function aNumero(v) {
  const n = parseFloat(String(v).replace(/[^0-9.\-]/g, ""));
  return isNaN(n) ? null : n;
}

function aImagenDrive(texto) {
  const t = (texto || "").trim(); if (!t) return "";
  const m = t.match(/(?:\/d\/|[?&]id=)([-\w]{25,})/) || t.match(/^([-\w]{25,})$/);
  return m ? "https://drive.google.com/thumbnail?id=" + m[1] + "&sz=w800" : t;
}

async function cargarDesdeHoja() {
  if (!CONFIG.hoja) return;
  try {
    const r = await fetch(CONFIG.hoja, { cache: "no-store" });
    if (!r.ok) throw new Error("HTTP " + r.status);
    const filas = leerCSV(await r.text());
    const cab   = filas.shift().map(c => c.trim().toLowerCase());
    const col   = n => cab.indexOf(n);
    filas.forEach(f => {
      // Busca por id de producto o por id||variante
      const rawId = (f[col("id")] || "").trim();
      const { id, variante } = parseClave(rawId);
      const p = PRODUCTOS.find(x => x.id === id);
      if (!p) return;
      if (variante && p.variantes) {
        // Actualiza la variante específica
        const v = p.variantes.find(x => x.valor === variante);
        if (!v) return;
        const precio = aNumero(f[col("precio")]);
        const stock  = aNumero(f[col("stock")]);
        if (precio !== null) v.precio = precio;
        if (stock  !== null) v.stock  = Math.max(0, Math.floor(stock));
      } else {
        // Actualiza el producto general
        const precio = aNumero(f[col("precio")]);
        const stock  = aNumero(f[col("stock")]);
        if (precio !== null) p.precio = precio;
        if (stock  !== null) p.stock  = Math.max(0, Math.floor(stock));
        const foto = aImagenDrive(f[col("foto")]);
        if (foto) p.imagen = foto;
      }
    });
  } catch(err) {
    console.warn("No se pudo leer la hoja; se usan datos del código.", err);
  }
}

/* =====================================================================
   15) CONFIGURACIÓN EN LA PÁGINA
===================================================================== */
function aplicarConfig() {
  const wa = linkWhatsApp("Hola Bit-IO, me gustaría saber más sobre sus productos y servicios.");
  ["#whatsapp-flotante","#contacto-whatsapp","#pie-whatsapp","#pie-whatsapp-numero"].forEach(s => {
    const el = $(s); if (el) el.href = wa;
  });
  $("#contacto-whatsapp-numero").textContent = CONFIG.telefonoVisible;
  $("#pie-whatsapp-numero").textContent      = CONFIG.telefonoVisible;
  $("#contacto-instagram").href              = CONFIG.redes.instagram;
  $("#contacto-instagram-texto").textContent = CONFIG.instagramUsuario;
  $("#red-instagram").href                   = CONFIG.redes.instagram;
  $("#contacto-correo").href                 = "mailto:" + CONFIG.email;
  $("#contacto-correo-texto").textContent    = CONFIG.email;
  $("#pie-correo").href                      = "mailto:" + CONFIG.email;
  $("#pie-correo-texto").textContent         = CONFIG.email;
  $$(".dato-horario").forEach(el  => el.textContent = CONFIG.horario);
  $$(".dato-direccion").forEach(el => el.textContent = CONFIG.direccion);
  $("#mapa-bitio").src             = CONFIG.mapa;
  $("#red-facebook").href          = CONFIG.redes.facebook;
  $("#red-tiktok").href            = CONFIG.redes.tiktok;
  $("#enlace-github-principal").href = CONFIG.github;
  $("#red-github").href            = CONFIG.github;
  $$(".boton-cotizar").forEach(btn => {
    btn.href = linkWhatsApp("Hola Bit-IO, quiero cotizar un servicio de " + btn.dataset.servicio + ".");
  });
  $("#anio").textContent = new Date().getFullYear();
}

/* =====================================================================
   16) ARRANQUE
===================================================================== */
renderFiltros();
renderCategoriasDestacadas();
renderCatalogo();
renderGithub();
renderCarrito();
actualizarContador();
poblarSelect();
actualizarLimiteApartado();
aplicarConfig();
$("#apartado-fecha").min = new Date().toISOString().split("T")[0];

cargarDesdeHoja().then(() => {
  // Ajusta carrito al stock real
  Object.keys(carrito).forEach(clave => {
    const { id, variante } = parseClave(clave);
    const p = PRODUCTOS.find(x => x.id === id);
    if (!p) return;
    const stock = variante && p.variantes
      ? (p.variantes.find(v => v.valor === variante) || {}).stock || 0
      : (p.stock || 0);
    if (stock > 0 && carrito[clave] > stock) carrito[clave] = stock;
    else if (stock === 0) delete carrito[clave];
  });
  guardarCarrito();
  renderCatalogo(); renderCarrito(); actualizarContador();
  poblarSelect(); actualizarLimiteApartado();
});
