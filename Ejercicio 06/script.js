// TODO: mostra les taules de multiplicar del 1 al 9 per la consola


// for (let i = 1; i <= 9; i++) {

//   console.log("Tabla del " + i + ":");
  
//   for (let j = 1; j <= 10; j++) {
//       console.log(i + " x " + j + " = " + (i * j));
//   }
  
//   console.log(""); // Línea en blanco para separar las tablas

// }


// TODO: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans i accepti com a separador decimal els símbols ",", "." i "'". P.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"

// function customParseFloat(str) {
//   // Regex para encontrar el primer número con posibles separadores decimales
//   let regex = /[-+]?\d+[.,']?\d*/;
//   let match = str.match(regex);
  
//   if (match) {
//       // Reemplazar ',' y ''' por '.' para estandarizar el separador decimal
//       let numStr = match[0].replace(/[,']/g, '.');
//       return parseFloat(numStr);
//   } else {
//       return NaN; // No se encontró un número válido
//   }
// }

// // Ejemplos de uso:
// console.log(customParseFloat("hola89'234")); // 89.234
// console.log(customParseFloat("43'35adeu"));  // 43.35
// console.log(customParseFloat("amor45.9odi")); // 45.9
// console.log(customParseFloat("xyz")); // NaN
// console.log(customParseFloat("abc123def456")); // 123
// console.log(customParseFloat("-56,78plus")); // -56.78



// TODO: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes de puntuació)

// function letraAleatoria(str) {
  
//   // Eliminar espacios y signos de puntuación usando una expresión regular
//   let letrasSolo = str.replace(/[^a-zA-Z]/g, '');
  
//   // Verificar si el string resultante no está vacío
//   if (letrasSolo.length === 0) {
//       return null; // O cualquier valor que consideres adecuado para indicar que no hay letras
//   }
  
//   // Obtener un índice aleatorio
//   let indiceAleatorio = Math.floor(Math.random() * letrasSolo.length);
  
//   // Devolver la letra en el índice aleatorio
//   return letrasSolo[indiceAleatorio];
// }

// // Ejemplos de uso:
// console.log(letraAleatoria("Hola, ¿cómo estás?")); // Puede devolver cualquier letra de "Holacómoestás"
// console.log(letraAleatoria("12345!@#")); // Devuelve null, ya que no hay letras
// console.log(letraAleatoria("A.B.C.")); // Puede devolver "A", "B" o "C"



// TODO: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni en un nou string separades per espais (sense usar arrays)

// function separarPalabras(texto) {
//   let resultado = '';
//   let palabraActual = '';

//   // Recorrer cada carácter del texto
//   for (let i = 0; i < texto.length; i++) {
//       let caracter = texto[i];

//       // Verificar si el carácter es una letra o un número (parte de una palabra)
//       if (/[a-zA-Z0-9]/.test(caracter)) {
//           palabraActual += caracter;
//       } else {
//           // Si el carácter no es parte de una palabra, añadir la palabra actual al resultado
//           if (palabraActual.length > 0) {
//               if (resultado.length > 0) {
//                   resultado += ' '; // Añadir un espacio si ya hay palabras en el resultado
//               }
//               resultado += palabraActual;
//               palabraActual = ''; // Reiniciar la palabra actual
//           }
//       }
//   }

//   // Añadir la última palabra si hay alguna
//   if (palabraActual.length > 0) {
//       if (resultado.length > 0) {
//           resultado += ' ';
//       }
//       resultado += palabraActual;
//   }

//   return resultado;
// }

// // Ejemplos de uso:
// console.log(separarPalabras("Hola, ¿cómo estás?")); // "Hola cómo estás"
// console.log(separarPalabras("Este es un texto de prueba.")); // "Este es un texto de prueba"
// console.log(separarPalabras("123,456.789!")); // "123 456 789"
// console.log(separarPalabras("No hay signos en este texto")); // "No hay signos en este texto"
// console.log(separarPalabras("")); // ""


// TODO: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (sense usar arrays)

// function palabraAleatoria(texto) {
//   let resultado = '';         // Cadena para almacenar el resultado final
//   let palabraActual = '';     // Cadena para construir palabras
//   let palabras = '';          // Cadena para almacenar todas las palabras separadas por espacios
//   let palabraContada = '';    // Cadena para almacenar palabras separadas por espacios
  
//   // Recorrer cada carácter del texto
//   for (let i = 0; i < texto.length; i++) {
//       let caracter = texto[i];
      
//       // Verificar si el carácter es una letra o un número (parte de una palabra)
//       if (/[a-zA-Z0-9]/.test(caracter)) {
//           palabraActual += caracter; // Construir la palabra actual
//       } else {
//           // Si el carácter no es parte de una palabra, añadir la palabra actual al resultado
//           if (palabraActual.length > 0) {
//               if (palabras.length > 0) {
//                   palabras += ' '; // Añadir un espacio si ya hay palabras en el resultado
//               }
//               palabras += palabraActual;
//               palabraActual = ''; // Reiniciar la palabra actual
//           }
//       }
//   }
  
//   // Añadir la última palabra si hay alguna
//   if (palabraActual.length > 0) {
//       if (palabras.length > 0) {
//           palabras += ' ';
//       }
//       palabras += palabraActual;
//   }

//   // Contar cuántas palabras hay
//   let start = 0;
//   let end = 0;
//   let contadorPalabras = 0;
  
//   for (let i = 0; i <= palabras.length; i++) {
//       if (i === palabras.length || palabras[i] === ' ') {
//           if (end > start) {
//               contadorPalabras++;
//               palabraContada += contadorPalabras.toString() + ' ';
//           }
//           start = i + 1;
//       }
//   }
  
//   // Si no hay palabras, devolver null
//   if (contadorPalabras === 0) {
//       return null;
//   }
  
//   // Seleccionar una palabra aleatoria
//   let indiceAleatorio = Math.floor(Math.random() * contadorPalabras);
  
//   // Encontrar y devolver la palabra correspondiente
//   let palabraActualIndex = 0;
//   start = 0;
  
//   for (let i = 0; i <= palabras.length; i++) {
//       if (i === palabras.length || palabras[i] === ' ') {
//           if (palabraActualIndex === indiceAleatorio) {
//               return palabras.slice(start, i);
//           }
//           palabraActualIndex++;
//           start = i + 1;
//       }
//   }

//   return null; // Si algo sale mal, devolver null
// }

// // Ejemplos de uso:
// console.log(palabraAleatoria("Hola, ¿cómo estás?")); // Puede devolver "Hola", "cómo" o "estás"
// console.log(palabraAleatoria("Este es un texto de prueba.")); // Puede devolver "Este", "es", "un", "texto", "de", "prueba"
// console.log(palabraAleatoria("123,456.789!")); // Puede devolver "123", "456", "789"
// console.log(palabraAleatoria("")); // null (vacío)


// // TODO: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins hi ha hagut coincidències d'aniversari

// function generarFechasAleatorias(n) {
//   const fechas = [];
//   while (fechas.length < n) {
//       // Generar una fecha aleatoria entre 1 y 365
//       const fecha = Math.floor(Math.random() * 365) + 1;
//       if (!fechas.includes(fecha)) {
//           fechas.push(fecha);
//       }
//   }
//   return fechas;
// }

// function comprobarFechasRepetidas(n) {
//   const fechas = [];
//   const totalFechas = 365;
//   let tieneRepeticiones = false;

//   while (fechas.length < n) {
//       // Generar una fecha aleatoria entre 1 y 365
//       const fecha = Math.floor(Math.random() * totalFechas) + 1;
      
//       // Verificar si la fecha ya está en el array
//       if (fechas.includes(fecha)) {
//           tieneRepeticiones = true; // Encontramos una repetición
//           break; // No necesitamos seguir generando más fechas
//       }
//       fechas.push(fecha);
//   }

//   return tieneRepeticiones;
// }

// function ejecutarPruebas() {
//   const tamaños = [5, 10, 20, 25, 35, 40, 45, 50];
//   const intentos = 1000; // Número de intentos para calcular el porcentaje

//   tamaños.forEach(n => {
//       let coincidencias = 0;

//       for (let i = 0; i < intentos; i++) {
//           if (comprobarFechasRepetidas(n)) {
//               coincidencias++;
//           }
//       }

//       const porcentajeCoincidencias = (coincidencias / intentos) * 100;
//       console.log(`Para N = ${n}, ${porcentajeCoincidencias.toFixed(2)}% de las veces hubo coincidencias de cumpleaños.`);
//   });
// }

// ejecutarPruebas();


