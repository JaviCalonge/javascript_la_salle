const saludo = document.querySelector(".btn-hola")

//EJERCICO 1

function saludar() {
  console.log("Hola");
}

saludo.addEventListener ("click", saludar)


//EJERCICIO 2

function saludarNombre () {
  const nombre = document.querySelector(".nombre").value.trim()
  
  if (nombre === "") {
    alert("Por favor, escribe tu nombre")
  } else {
    console.log(`Hola ${nombre}`);
  }
}

saludo.addEventListener ("click", saludarNombre)


//EJERCICIO 3

function añadirNombre () {
  const nombre = document.querySelector(".nombre").value.trim()
  let tuNombre = document.querySelector(".tu-nombre")

  if (nombre === "") {
    alert("Por favor, escribe tu nombre")
  } else {
  tuNombre.innerHTML += `Hola ${nombre}`
  }
}

saludo.addEventListener ("click", añadirNombre)
saludo.addEventListener ("keyup", añadirNombre)


//EJERCICO 4

function añadirPronombre () {
  const nombre = document.querySelector(".nombre").value.trim()
  const pronombreCheck = document.querySelector('input[name="pronombre"]:checked')
  let tuNombre = document.querySelector(".tu-nombre")

  if (nombre === "") {
        alert("Por favor, escribe tu nombre")
        return
      }
  
  if (!pronombreCheck) {
    alert("Por favor, elige un pronombre")
    return
  }

  const pronombre = pronombreCheck.value;
  tuNombre.innerHTML = `Hola(${pronombre}) ${nombre}`;

}

saludo.addEventListener ("click", añadirPronombre)


//EJERCICIO 5

function saludarColor () {
  const nombre = document.querySelector(".nombre").value.trim()
  const colorSelect = document.querySelector("#color").value
  
  if (nombre === "") {
    alert("Por favor, escribe tu nombre")
    return
  } 

  if (colorSelect === "choose") {
    alert("Por favor, elige un color")
    return
  }

console.log(`Hola %c${nombre}`, `color: ${colorSelect}`)

}

saludo.addEventListener ("click", saludarColor)


// EJERCICIO 6

function saludarColorP () {
  const nombre = document.querySelector(".nombre").value.trim()
  const colorSelect = document.querySelector("#color").value
  let tuNombre = document.querySelector(".tu-nombre")
  
  if (nombre === "") {
    alert("Por favor, escribe tu nombre")
    return
  } 

  if (colorSelect === "choose") {
    alert("Por favor, elige un color")
    return
  } 

  tuNombre.innerHTML = `Hola <span style="color:${colorSelect}">${nombre}</span>`

}

saludo.addEventListener ("click", saludarColorP)


//EJERCICO 7

function saludarColorInput () {
  const nombre = document.querySelector(".nombre").value.trim()
  const colorSelect = document.querySelector("#colores").value
  let tuNombre = document.querySelector(".tu-nombre")
  
  if (nombre === "") {
    alert("Por favor, escribe tu nombre")
    return
  } 

  if (colorSelect === "choose") {
    alert("Por favor, elige un color")
    return
  } 

  tuNombre.innerHTML = `Hola <span style="color:${colorSelect}">${nombre}</span>`

}

saludo.addEventListener ("click", saludarColorInput)

const convierte = document.querySelector(".btn-temperatura")


//EJERCICO 8


function convertir () {
  const celsius = document.querySelector(".temperatura").value
  let resultado = document.querySelector(".ver-temperatura")

  let farenheit = (celsius * 9 / 5) + 32

  resultado.innerHTML += (`${celsius}ºC son `) + farenheit + ("ºF")

}

convierte.addEventListener("click", convertir)


//EJERCICO 9

const convertidor = document.querySelector(".btn-convertidor")

// function convertir () {
//   const temperatura = document.querySelector(".input-convertidor").value
//   let resultado = document.querySelector(".ver-conversion")
//   let medida1 = document.querySelector(".select-convertidor-1").value
//   let medida2 = document.querySelector(".select-convertidor-2").value

//   if (medida1 == "Celsius" && medida2 == "Farenheit") {
//     let transform = (temperatura * 9 / 5) + 32 
//     resultado.innerHTML += (`${temperatura} ${medida1} son ` + transform + ` ${medida2}`)}
  
//   if (medida1 == "Celsius" && medida2 == "Kelvin") {
//     let transform = temperatura + 273.15

//     resultado.innerHTML += (`${temperatura} ${medida1} son ` + transform + ` ${medida2}`)}
  
//   if (medida1 == "Farenheit" && medida2 == "Celsius") {
//     let transform = (temperatura - 32) * 5 / 9 
//     resultado.innerHTML += (`${temperatura} ${medida1} son ` + transform + ` ${medida2}`)}

//   if (medida1 == "Farenheit" && medida2 == "Kelvin") {
//     let transform = (temperatura - 32) * 5 / 9 + 273.15
//     resultado.innerHTML += (`${temperatura} ${medida1} son ` + transform + ` ${medida2}`)}

//   if (medida1 == "Kelvin" && medida2 == "Celsius") {
//     let transform = temperatura - 273.15
//     resultado.innerHTML += (`${temperatura} ${medida1} son ` + transform + ` ${medida2}`)}
  
//   if (medida1 == "Kelvin" && medida2 == "Farenheit") {
//     let transform = (temperatura - 273.15) * 9 / 5 + 32
//     resultado.innerHTML += (`${temperatura} ${medida1} son ` + transform + ` ${medida2}`)}

// }

// convertidor.addEventListener("click", convertir)


//VERSIÓN CHATGPT!


const conversiones = {
  "Celsius-Farenheit": temp => (temp * 9 / 5) + 32,
  "Celsius-Kelvin": temp => temp + 273.15,
  "Farenheit-Celsius": temp => (temp - 32) * 5 / 9,
  "Farenheit-Kelvin": temp => (temp - 32) * 5 / 9 + 273.15,
  "Kelvin-Celsius": temp => temp - 273.15,
  "Kelvin-Farenheit": temp => (temp - 273.15) * 9 / 5 + 32
};

function convertir() {
  const temperatura = parseFloat(document.querySelector(".input-convertidor").value);
  const resultado = document.querySelector(".ver-conversion");
  const medida1 = document.querySelector(".select-convertidor-1").value;
  const medida2 = document.querySelector(".select-convertidor-2").value;

  if (isNaN(temperatura)) {
    resultado.innerHTML = "Por favor, ingresa una temperatura válida.";
    return;
  }

  if (medida1 === medida2) {
    resultado.innerHTML = `La medida de ${medida1} es la misma en ambas selecciones.`;
    return;
  }

  const key = `${medida1}-${medida2}`;
  const transform = conversiones[key];

  if (transform) {
    const resultadoTransformado = transform(temperatura);
    resultado.innerHTML = `${temperatura} ${medida1} son ${resultadoTransformado} ${medida2}`;
  } else {
    resultado.innerHTML = "Conversión no soportada.";
  }
}

convertidor.addEventListener("click", convertir);


//EJERCICO 10


const calcular = document.querySelector(".btn-calculadora")


function calculadora () {
  const numero1 = parseFloat(document.querySelector(".num1-type").value)
  const numero2 = parseFloat(document.querySelector(".num2-type").value)
  const operador = document.querySelector(".operador").value
  const frase = document.querySelector(".resultado-calculadora")

  
  if (operador === "sumar") {
    let resultado = numero1 + numero2
    frase.innerHTML += `${numero1} ${operador} ${numero2} es igual a ${resultado}`
  }

  if (operador === "restar") {
    let resultado = numero1 - numero2
    frase.innerHTML += `${numero1} ${operador} ${numero2} es igual a ${resultado}`
  }

  if (operador === "multiplicar") {
    let resultado = numero1 * numero2
    frase.innerHTML += `${numero1} ${operador} ${numero2} es igual a ${resultado}`
  }

  if (operador === "dividir") {
    let resultado = numero1 / numero2
    frase.innerHTML += `${numero1} ${operador} ${numero2} es igual a ${resultado}`
  }
  
}

calcular.addEventListener("click", calculadora)


//VERSIÓN CHATGPT

// function calculadora() {
//   const numero1 = parseFloat(document.querySelector(".num1-type").value);
//   const numero2 = parseFloat(document.querySelector(".num2-type").value);
//   const operador = document.querySelector(".operador").value;
//   const frase = document.querySelector(".resultado-calculadora");

//   // Definir un objeto con las operaciones
//   const operaciones = {
//     sumar: (a, b) => a + b,
//     restar: (a, b) => a - b,
//     multiplicar: (a, b) => a * b,
//     dividir: (a, b) => a / b,
//   };

//   // Verificar si el operador es válido y realizar la operación
//   if (operaciones[operador]) {
//     const resultado = operaciones[operador](numero1, numero2);
//     frase.innerHTML += `${numero1} ${operador} ${numero2} es igual a ${resultado}`;
//   } else {
//     frase.innerHTML += `Operador no válido.`;
//   }
// }

// calcular.addEventListener("click", calculadora);


//EJERCICO 11

// document.addEventListener('DOMContentLoaded', function() {
//   const pantalla = document.querySelector('.pantalla');
//   const teclas = document.querySelectorAll('.tecla');

//   teclas.forEach(tecla => {
//       tecla.addEventListener('click', function() {
//           const valor = this.value;

//           if (valor === 'C') {
//               pantalla.value = '';
//           } else if (valor === '=') {
//               try {
//                   pantalla.value = evaluateExpression(pantalla.value);
//               } catch (error) {
//                   pantalla.value = 'Error';
//               }
//           } else {
//               pantalla.value += valor;
//           }
//       });
//   });

//   function evaluateExpression(expression) {
//       // Validar y reemplazar operaciones
//       const validExpression = expression.replace(/[^0-9+\-*/.]/g, '');
//       return Function(`'use strict'; return (${validExpression})`)();
//   }
// });

// OPCIÓN USANDO BIBLIOTECA math.js

// document.addEventListener('DOMContentLoaded', function() {
//   const pantalla = document.querySelector('.pantalla');
//   const teclas = document.querySelectorAll('.tecla');

//   teclas.forEach(tecla => {
//       tecla.addEventListener('click', function() {
//           const valor = this.value;

//           if (valor === 'C') {
//               pantalla.value = '';
//           } else if (valor === '=') {
//               try {
//                   pantalla.value = math.evaluate(pantalla.value);
//               } catch (error) {
//                   pantalla.value = 'Error';
//               }
//           } else {
//               pantalla.value += valor;
//           }
//       });
//   });
// });


// EJERCICO 11.1


document.addEventListener('DOMContentLoaded', function() {
  const pantalla = document.querySelector('.pantalla');
  const teclas = document.querySelectorAll('.tecla');
  const shiftButton = document.getElementById('shift');
  let isShiftActive = false;

  const normalKeys = [
      { value: 'Shift' }, { value: '7' }, { value: '4' }, { value: '1' },
      { value: 'C' }, { value: '8' }, { value: '5' }, { value: '2' },
      { value: '0' }, { value: '9' }, { value: '6' }, { value: '3' },
      { value: '=' }, { value: '/' }, { value: '*' }, { value: '-' },
      { value: '+' }
  ];

  const shiftKeys = [
      { value: 'Shift'}, { value: 'cos(' }, { value: 'tan(' }, { value: '√' },
      { value: 'π' }, { value: 'e' }, { value: '^' }, { value: '%' },
      { value: '(' }, { value: ')' }, { value: 'ln(' }, { value: '-' },
      { value: 'C' }, { value: '0' }, { value: '=' }, { value: '+' },
      { value: 'sin(' }
  ];

  function updateKeys() {
      const keys = isShiftActive ? shiftKeys : normalKeys;
      teclas.forEach((tecla, index) => {
          tecla.value = keys[index].value;
      });
  }

  teclas.forEach(tecla => {
      tecla.addEventListener('click', function() {
          const valor = this.value;

          if (valor === 'Shift') {
              isShiftActive = !isShiftActive;
              updateKeys();
          } else if (valor === 'C') {
              pantalla.value = '';
          } else if (valor === '=') {
              try {
                  pantalla.value = math.evaluate(pantalla.value);
              } catch (error) {
                  pantalla.value = 'Error';
              }
          } else {
              pantalla.value += valor;
          }
      });
  });

  updateKeys(); // Inicializa las teclas con el conjunto normal

});


//EJERCICO 12 y 12.2


const btnLista = document.querySelector(".btn-lista")

function añadir () {

  const articulos = document.querySelector(".articulo").value
  const seccion = document.querySelector(".secciones").value
  const lista = document.querySelector(".lista")

  if (articulos === "") {
    alert("Añade un artículo para la lista")
  } else if (seccion === "seccion") {
    alert("No olvides elegir la sección")
  } else {
    lista.innerHTML += `<li>${articulos} - Sección: ${seccion}</li>`
    document.querySelector(".articulo").value = ""
  }
}

btnLista.addEventListener("click", añadir)


//EJERCICO 12.1


let btnOrdenar = document.querySelector(".btn-ordenar")

let aZ = true


function ordena () {
  const lista = document.querySelector(".lista")
  const items = Array.from(lista.getElementsByTagName("li"))
  
  items.sort((a, b) => {
    if (aZ) {
        return a.textContent.localeCompare(b.textContent, 'es', { sensitivity: 'base' });
        
    } else {
        return b.textContent.localeCompare(a.textContent, 'es', { sensitivity: 'base' });
    }
})

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
}

// Agregar los elementos ordenados
items.forEach(item => lista.appendChild(item))

aZ = !aZ

btnOrdenar.textContent = aZ ? 'Ordenar Z-A' : 'Ordenar A-Z'

}

btnOrdenar.addEventListener("click", ordena)


const btnColores = document.querySelector(".btn-colores");

    function elegirColores() {

      const elegir = document.querySelector(".colores").value;
      const colores = document.querySelectorAll(".color");

      // Oculta todos los elementos
      colores.forEach(color => color.classList.remove("show"));

      // Muestra el elemento seleccionado
      if (elegir === "elegir") {
        alert("Elige un color");
      } else {
        const seleccionado = document.querySelector(`.${elegir}`);
        if (seleccionado) {
          seleccionado.classList.add("show");
        }
      }
    }

    btnColores.addEventListener("click", elegirColores);


const btnCaja = document.getElementById("btnGenerar")

function caja () {

  const nombre = document.getElementById("nombre").value;
  const comida = document.getElementById("comida").value;
  const medida = document.getElementById("medida").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre && comida && medida && mensaje) {
    const resultado = `${nombre} ha pedido una caja de ${comida} tamaño ${medida} (${mensaje})`;
    document.getElementById("resultado").innerText = resultado;
  } else {
    alert("Por favor, completa todos los campos.");
  }

};

btnCaja.addEventListener("click", caja)