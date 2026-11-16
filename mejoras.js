/* [GEMINI - MEJORAS.JS]
   Notas para LLM sucesor: 
   - Este script extiende el comportamiento base de script.js.
   - Sobrescribe la función `tarjetaHTML` para disparar el modal en lugar de agregar directamente.
   - Maneja la inyección dinámica del DOM para el modal de cantidad del carrito.
   - Respeta las configuraciones de contacto y los estados de validación de stock. */

CONFIG.email = "julioyaelcar@gmail.com";
CONFIG.hoja = "";

(function () {
  const wa = linkWhatsApp("Hola Bit-IO, me gustaría saber más sobre sus productos y servicios.");
  ["#whatsapp-flotante", "#contacto-whatsapp", "#pie-whatsapp", "#pie-whatsapp-numero"].forEach((s) => {
    const el = $(s);
    if (el) el.href = wa;
  });
  if ($("#contacto-correo")) $("#contacto-correo").href = "mailto:" + CONFIG.email;
  if ($("#contacto-correo-texto")) $("#contacto-correo-texto").textContent = CONFIG.email;
})();

function idsValidos() {
  return Object.keys(carrito).filter((id) => PRODUCTOS.some((p) => p.id === id));
}

function actualizarContador() {
  const total = idsValidos().reduce((s, id) => s + carrito[id], 0);
  const c = $("#carrito-contador");
  if (!c) return;
  c.textContent = total;
  c.classList.toggle("oculto", total === 0);
}

function renderCarrito() {
  const cont = $("#carrito-items");
  if (!cont) return;
  const ids = Object.keys(carrito);
  if (ids.length === 0) {
    cont.innerHTML = '<div class="carrito-vacio"><p>Tu carrito está vacío.</p><span>[ agrega productos desde el catálogo ]</span></div>';
  } else {
    cont.innerHTML = ids.map((id) => {
      const p = PRODUCTOS.find((x) => x.id === id);
      const quitar = `<button type="button" class="carrito-quitar" onclick="quitarDelCarrito('${id}')">×</button>`;
      if (!p) {
        return `<div class="carrito-item carrito-item-nodisponible"><div><p class="carrito-item-nombre">Producto ya no disponible</p></div><span></span>${quitar}</div>`;
      }
      return `<div class="carrito-item">
        <div><p class="carrito-item-nombre">${p.nombre}</p><p class="carrito-item-precio">${formatoPrecio(p.precio)} c/u</p></div>
        <div class="carrito-cantidad">
          <button type="button" onclick="cambiarCantidad('${id}', -1)">−</button>
          <span>${carrito[id]}</span>
          <button type="button" onclick="cambiarCantidad('${id}', 1)">+</button>
        </div>${quitar}</div>`;
    }).join("");
  }
  if ($("#carrito-total")) $("#carrito-total").textContent = formatoPrecio(totalCarrito());
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

// [GEMINI] Modificación de tarjetaHTML para invocar abrirModalCarrito en vez de agregar directo
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
      <button type="button" class="btn btn-neon btn-bloque" onclick="abrirModalCarrito('${producto.id}')" ${agotado ? "disabled" : ""}>Agregar al carrito</button>
      <button type="button" class="btn btn-borde btn-bloque" onclick="abrirApartado('${producto.id}')" ${agotado ? "disabled" : ""}>Apartar</button>
    </div>
  </article>`;
}

// [GEMINI] Inyección y control dinámico de la ventana modal para selección de cantidad
if (!$("#modal-carrito-fondo")) {
  const modalHTML = `
  <div class="modal-carrito-fondo" id="modal-carrito-fondo">
    <div class="modal-carrito-tarjeta" role="dialog" aria-modal="true">
      <button type="button" class="btn-cerrar" onclick="cerrarModalCarrito()">×</button>
      <div class="modal-carrito-img" id="modal-carrito-img-container"></div>
      <div class="modal-carrito-info">
        <h3 id="modal-carrito-titulo"></h3>
        <p class="modal-carrito-precio" id="modal-carrito-precio"></p>
        <p class="modal-carrito-stock" id="modal-carrito-stock"></p>
        <div class="modal-carrito-cantidad-seccion">
          <label for="modal-carrito-input">Cantidad:</label>
          <div class="carrito-cantidad">
            <button type="button" onclick="cambiarCantidadModal(-1)">−</button>
            <input type="number" id="modal-carrito-input" min="1" value="1" onchange="validarCantidadModal()" />
            <button type="button" onclick="cambiarCantidadModal(1)">+</button>
          </div>
        </div>
        <button type="button" class="btn btn-neon btn-bloque" onclick="confirmarAgregarCarrito()">Agregar al carrito</button>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
  $("#modal-carrito-fondo").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) cerrarModalCarrito();
  });
}

let productoModalActual = null;

function abrirModalCarrito(id) {
  const p = PRODUCTOS.find((x) => x.id === id);
  if (!p) return;
  productoModalActual = p;

  const imgContainer = $("#modal-carrito-img-container");
  const foto = p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy" onerror="this.remove()">` : "";
  imgContainer.innerHTML = `${ICONO_CHIP}${foto}`;

  $("#modal-carrito-titulo").textContent = p.nombre;
  $("#modal-carrito-precio").textContent = formatoPrecio(p.precio);
  $("#modal-carrito-stock").textContent = "Stock disponible: " + p.stock;
  
  const input = $("#modal-carrito-input");
  input.max = p.stock;
  input.value = 1;

  document.body.classList.add("modal-carrito-abierto");
}

function cerrarModalCarrito() {
  document.body.classList.remove("modal-carrito-abierto");
  productoModalActual = null;
}

function cambiarCantidadModal(delta) {
  const input = $("#modal-carrito-input");
  let val = parseInt(input.value) || 1;
  val += delta;
  const max = productoModalActual ? productoModalActual.stock : 1;
  if (val < 1) val = 1;
  if (val > max) val = max;
  input.value = val;
}

function validarCantidadModal() {
  const input = $("#modal-carrito-input");
  let val = parseInt(input.value) || 1;
  const max = productoModalActual ? productoModalActual.stock : 1;
  if (val < 1) val = 1;
  if (val > max) val = max;
  input.value = val;
}

function confirmarAgregarCarrito() {
  if (!productoModalActual) return;
  const cantidad = parseInt($("#modal-carrito-input").value) || 1;
  const id = productoModalActual.id;
  
  carrito[id] = (carrito[id] || 0) + cantidad;
  const p = PRODUCTOS.find((x) => x.id === id);
  if (p && carrito[id] > p.stock) carrito[id] = p.stock;

  guardarCarrito();
  renderCarrito();
  actualizarContador();
  cerrarModalCarrito();
  abrirCarrito();
}

function abrirCarrito() { document.body.classList.add("carrito-abierto"); }
function cerrarCarrito() { document.body.classList.remove("carrito-abierto"); }
function alternarMenu() { document.body.classList.toggle("menu-abierto"); }

function refrescarTodo() {
  if (typeof renderCatalogo === "function") renderCatalogo();
  renderCarrito();
  actualizarContador();
}

refrescarTodo();
