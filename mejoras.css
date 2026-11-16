/* BIT-IO — mejoras.js
   Se carga DESPUÉS de script.js. Para deshacer todo, quita su <script> del index.html. */

// ---- Datos: pega aquí el enlace CSV publicado de tu Google Sheet ----
CONFIG.email = "julioyaelcar@gmail.com";
CONFIG.hoja = "";

// ---- WhatsApp y correo corregidos ----
(function () {
  const wa = linkWhatsApp("Hola Bit-IO, me gustaría saber más sobre sus productos y servicios.");
  ["#whatsapp-flotante", "#contacto-whatsapp", "#pie-whatsapp", "#pie-whatsapp-numero"].forEach((s) => ($(s).href = wa));
  $("#contacto-correo").href = "mailto:" + CONFIG.email;
  $("#contacto-correo-texto").textContent = CONFIG.email;
  $("#pie-correo").href = "mailto:" + CONFIG.email;
  $("#pie-correo-texto").textContent = CONFIG.email;
})();

// ---- Carrito: productos que ya no existen quedan marcados ----
function idsValidos() {
  return Object.keys(carrito).filter((id) => PRODUCTOS.some((p) => p.id === id));
}

function actualizarContador() {
  const total = idsValidos().reduce((s, id) => s + carrito[id], 0);
  const c = $("#carrito-contador");
  c.textContent = total;
  c.classList.toggle("oculto", total === 0);
}

function renderCarrito() {
  const cont = $("#carrito-items");
  const ids = Object.keys(carrito);
  if (ids.length === 0) {
    cont.innerHTML = '<div class="carrito-vacio"><p>Tu carrito está vacío.</p><span>[ agrega productos desde el catálogo ]</span></div>';
  } else {
    cont.innerHTML = ids.map((id) => {
      const p = PRODUCTOS.find((x) => x.id === id);
      const quitar = `<button type="button" class="carrito-quitar" data-testid="quitar-${id}" aria-label="Eliminar del carrito" onclick="quitarDelCarrito('${id}')">×</button>`;
      if (!p) {
        return `<div class="carrito-item carrito-item-nodisponible" data-testid="carrito-item-${id}"><div><p class="carrito-item-nombre">Producto ya no disponible</p><p class="carrito-item-precio">Ya no está en el catálogo. Quítalo de tu carrito.</p></div><span></span>${quitar}</div>`;
      }
      return `<div class="carrito-item" data-testid="carrito-item-${id}">
        <div><p class="carrito-item-nombre">${p.nombre}</p><p class="carrito-item-precio">${formatoPrecio(p.precio)} c/u</p></div>
        <div class="carrito-cantidad">
          <button type="button" data-testid="restar-${id}" aria-label="Quitar una unidad" onclick="cambiarCantidad('${id}', -1)">−</button>
          <span data-testid="cantidad-${id}">${carrito[id]}</span>
          <button type="button" data-testid="sumar-${id}" aria-label="Agregar una unidad" onclick="cambiarCantidad('${id}', 1)">+</button>
        </div>${quitar}</div>`;
    }).join("");
  }
  $("#carrito-total").textContent = formatoPrecio(totalCarrito());
}

function enviarPedidoWhatsApp() {
  const ids = idsValidos();
  if (ids.length === 0) return;
  const lineas = ids.map((id) => {
    const p = PRODUCTOS.find((x) => x.id === id);
    return "• " + carrito[id] + " × " + p.nombre + " — " + formatoPrecio(p.precio * carrito[id]);
  });
  const mensaje = "Hola Bit-IO, quiero hacer un pedido:\n" + lineas.join("\n") +
    "\nTotal: " + formatoPrecio(totalCarrito()) + " MXN\n\n¿Me ayudan a confirmar la entrega? Gracias.";
  window.open(linkWhatsApp(mensaje), "_blank");
}

// ---- Tarjeta de producto con foto (con ícono de respaldo) ----
function tarjetaHTML(producto, indice) {
  const agotado = producto.stock === 0;
  const foto = producto.imagen ? `<img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" onerror="this.remove()">` : "";
  return `
  <article class="tarjeta-producto" style="--i:${indice}" data-testid="tarjeta-${producto.id}">
    <div class="producto-img" data-testid="imagen-${producto.id}">
      ${ICONO_CHIP}${foto}
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

// ---- Apartar: límite al stock + enlace para pedir más ----
function poblarSelect() {
  const select = $("#apartado-producto");
  select.innerHTML = "";
  PRODUCTOS.forEach((p) => {
    const o = document.createElement("option");
    o.value = p.id;
    o.textContent = p.nombre + " — " + formatoPrecio(p.precio);
    select.appendChild(o);
  });
}

if (!$("#apartado-ayuda")) {
  const ayuda = document.createElement("p");
  ayuda.className = "modal-ayuda";
  ayuda.id = "apartado-ayuda";
  ayuda.setAttribute("data-testid", "apartado-ayuda");
  $("#apartado-cantidad").closest("label").after(ayuda);
}

function actualizarLimiteApartado() {
  const producto = PRODUCTOS.find((p) => p.id === $("#apartado-producto").value);
  const input = $("#apartado-cantidad");
  const ayuda = $("#apartado-ayuda");
  if (!producto) { input.removeAttribute("max"); ayuda.textContent = ""; return; }
  input.max = producto.stock;
  if (Number(input.value) > producto.stock) input.value = producto.stock;
  const mensaje = "Hola Bit-IO, necesito más de " + producto.stock + " piezas de: " + producto.nombre + ". ¿Me ayudan?";
  ayuda.innerHTML = "Máximo " + producto.stock + " piezas disponibles. ¿Necesitas más? " +
    '<a href="' + linkWhatsApp(mensaje) + '" target="_blank" rel="noopener">Pídelas por WhatsApp</a>';
}
$("#apartado-producto").addEventListener("change", actualizarLimiteApartado);

// ---- Paneles y menú: foco, aria, cierre con Esc / tocar fuera ----
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
function abrirApartado(id) {
  focoPrevio = document.activeElement;
  $("#apartado-producto").value = id;
  actualizarLimiteApartado();
  document.body.classList.add("apartado-abierto");
  $('[data-testid="apartado-nombre"]').focus();
}
function cerrarApartado() {
  if (!document.body.classList.contains("apartado-abierto")) return;
  document.body.classList.remove("apartado-abierto");
  if (focoPrevio) focoPrevio.focus();
}
function alternarMenu() {
  const abierto = document.body.classList.toggle("menu-abierto");
  $("#btn-menu").setAttribute("aria-expanded", abierto);
}
function cerrarMenu() {
  document.body.classList.remove("menu-abierto");
  $("#btn-menu").setAttribute("aria-expanded", "false");
}

$("#btn-menu").setAttribute("aria-expanded", "false");
$("#btn-menu").setAttribute("aria-controls", "nav-enlaces");
const panelCarrito = $("#carrito-panel");
panelCarrito.setAttribute("role", "dialog");
panelCarrito.setAttribute("aria-modal", "true");
panelCarrito.setAttribute("aria-labelledby", "titulo-carrito");
panelCarrito.querySelector("h3").id = "titulo-carrito";

$$("#nav-enlaces a").forEach((a) => a.addEventListener("click", cerrarMenu));
$("#carrito-overlay").addEventListener("click", cerrarCarrito);
$("#apartado-fondo").addEventListener("click", (e) => { if (e.target === e.currentTarget) cerrarApartado(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { cerrarCarrito(); cerrarApartado(); cerrarMenu(); return; }
  if (e.key !== "Tab") return;
  const panel = document.body.classList.contains("apartado-abierto") ? $(".modal")
    : document.body.classList.contains("carrito-abierto") ? panelCarrito : null;
  if (!panel) return;
  const foco = Array.from(panel.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled])'));
  if (!foco.length) return;
  const primero = foco[0], ultimo = foco[foco.length - 1];
  if (!panel.contains(document.activeElement)) { e.preventDefault(); primero.focus(); }
  else if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
  else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
});

// ---- Precio, stock y foto desde Google Sheets ----
function leerCSV(texto) {
  const filas = [];
  let fila = [], campo = "", comillas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (comillas) {
      if (c === '"' && texto[i + 1] === '"') { campo += '"'; i++; }
      else if (c === '"') comillas = false;
      else campo += c;
    } else if (c === '"') comillas = true;
    else if (c === ",") { fila.push(campo); campo = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && texto[i + 1] === "\n") i++;
      fila.push(campo); filas.push(fila); fila = []; campo = "";
    } else campo += c;
  }
  if (campo !== "" || fila.length) { fila.push(campo); filas.push(fila); }
  return filas;
}

function aNumero(valor) {
  const n = parseFloat(String(valor).replace(/[^0-9.\-]/g, ""));
  return isNaN(n) ? null : n;
}

function aImagenDrive(texto) {
  const t = (texto || "").trim();
  if (!t) return "";
  const m = t.match(/(?:\/d\/|[?&]id=)([-\w]{25,})/) || t.match(/^([-\w]{25,})$/);
  return m ? "https://drive.google.com/thumbnail?id=" + m[1] + "&sz=w800" : t;
}

async function cargarDesdeHoja() {
  if (!CONFIG.hoja) return;
  try {
    const r = await fetch(CONFIG.hoja, { cache: "no-store" });
    if (!r.ok) throw new Error("HTTP " + r.status);
    const filas = leerCSV(await r.text());
    const cab = filas.shift().map((c) => c.trim().toLowerCase());
    const col = (n) => cab.indexOf(n);
    filas.forEach((f) => {
      const p = PRODUCTOS.find((x) => x.id === (f[col("id")] || "").trim());
      if (!p) return;
      const precio = aNumero(f[col("precio")]);
      const stock = aNumero(f[col("stock")]);
      if (precio !== null) p.precio = precio;
      if (stock !== null) p.stock = Math.max(0, Math.floor(stock));
      const foto = aImagenDrive(f[col("foto")]);
      if (foto) p.imagen = foto;
    });
  } catch (error) {
    console.warn("No se pudo leer la hoja; se usan los datos del código.", error);
  }
}

// ---- Arranque de las mejoras ----
function refrescarTodo() {
  renderCatalogo();
  renderCarrito();
  actualizarContador();
  poblarSelect();
  actualizarLimiteApartado();
}
refrescarTodo();
cargarDesdeHoja().then(() => {
  Object.keys(carrito).forEach((id) => {
    const p = PRODUCTOS.find((x) => x.id === id);
    if (p && carrito[id] > p.stock) { if (p.stock > 0) carrito[id] = p.stock; else delete carrito[id]; }
  });
  guardarCarrito();
  refrescarTodo();
});
