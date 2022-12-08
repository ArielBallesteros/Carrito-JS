//STOCK PRODUCTOS

const stockProductos = [
  {
    id: 1,
    nombre: "CREMA TATTOO DESKIN",
    cantidad: 1,
    desc: "Crema post tattoo diseñada especificamente para el cuidado del tattoo recomendada por dermatologos expertos",
    precio: 1500,
    img: "https://res.cloudinary.com/ariel666/image/upload/v1662580288/crema1_jdozcj.jpg",
  },
  {
    id: 2,
    nombre: "CREMA LOVE MY INK ",
    cantidad: 1,
    desc: "Crema post tattoo diseñada especificamente para el cuidado del tattoo recomendada por dermatologos expertos",
    precio: 1600,
    img: "https://res.cloudinary.com/ariel666/image/upload/v1662580288/crema2_lgplts.jpg",
  },
  {
    id: 3,
    nombre: "COMBO BALM TATTOO",
    cantidad: 1,
    desc: "Crema post tattoo diseñada especificamente para el cuidado del tattoo recomendada por dermatologos expertos",
    precio: 3500,
    img: "https://res.cloudinary.com/ariel666/image/upload/v1662580289/crema3_cljt2n.jpg",
  },
  {
    id: 4,
    nombre: "CREMA BALM TATTOO",
    cantidad: 1,
    desc: "Crema post tattoo diseñada especificamente para el cuidado del tattoo recomendada por dermatologos expertos",
    precio: 1800,
    img:  "https://res.cloudinary.com/ariel666/image/upload/v1662580289/crema4_xakyoc.jpg",
  },
  {
    id: 5,
    nombre: "CREMA PAIN CONTROL",
    cantidad: 1,
    desc: "Crema anestesica marca Pain Control, para tattuarte sin dolor, dejarla actuar 40 min antes de empezar el tattoo.",
    precio: 2000,
    img: "https://res.cloudinary.com/ariel666/image/upload/v1663728343/paincontrol_g4q5hr.jpg" ,
  },
  {
    id: 6,
    nombre:"CREMA TKTX",
    cantidad: 1,
    desc:"Crema anestesica marca TKTX, para tattuarte sin dolor, dejarla actuar 40 min antes de empezar el tattoo. La marca con mas duracion.",
    precio: 1900,
    img:"https://res.cloudinary.com/ariel666/image/upload/v1663728343/tktxcrema_xivday.jpg",
  },
  {
    id: 7,
    nombre: "TINTA DYNAMIC",
    cantidad: 1,
    desc: "Tinta negra marca Dynamic Triple-Black 8oz, la mejor tinta para rellenos lineas y sombras, usado por profesionales, importada.",
    precio: 8000,
    img: "https://res.cloudinary.com/ariel666/image/upload/v1662580289/tinta_dynamic_y49fyc.jpg",
  },
  {
    id: 8,
    nombre:"TINTA SOLID INK",
    cantidad: 1,
    desc: "Tinta marca Solid Ink 1oz, la mejor tinta de color para rellenos, usado por profesionales, importada de EEUU.",
    precio: 6000,
    img: "https://res.cloudinary.com/ariel666/image/upload/v1663729470/solidink1_xks0yg.jpg",
  },
  {
    id: 9,
    nombre:"TINTA INTENZE",
    cantidad: 1,
    desc: "Tinta marca Intenze 1oz, tintas de varios colores para rellenos, usado por profesionales, importada de EEUU.",
    precio: 7000,
    img: "https://res.cloudinary.com/ariel666/image/upload/v1663729814/intenzecolors_j8uyek.jpg",
  },
  {
    id: 10,
    nombre: "MAQUINA TATTOO",
    cantidad: 1,
    desc:"maquina profesional de tattoo bobinas para lineas o relleno, maquina hibrida de 10 vueltas, frame de hierro artesanal.",
    precio: 18000,
    img: "https://res.cloudinary.com/ariel666/image/upload/v1663724384/maquina-tattoo-bobina_kxeqap.jpg",
  },
  {
      id: 11,
      nombre: "MAQUINA ROTATIVA",
      cantidad: 1,
      desc:"maquina profesional de tattoo rotativa, poco peso ideal para lineas relleno o sombra , cuerpo de hierro macizo cnc.",
      precio: 16000,
      img: "https://res.cloudinary.com/ariel666/image/upload/v1663881744/tattoomachinerotative_gxtada.jpg",
    },
    {
      id: 12,
      nombre: "MAQUINA PEN",
      cantidad: 1,
      desc: "maquina profesional de tattoo tipo Pen para lineas relleno o sombra , cuerpo de aluminio aeronautico cnc.",
      precio: 25000,
      img: "https://res.cloudinary.com/ariel666/image/upload/v1663881744/tattoopen_gocnu6.jpg",
    },
];

let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.innerText = "   " + carrito.reduce((acc,prod) => acc + prod.cantidad, 0)

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }