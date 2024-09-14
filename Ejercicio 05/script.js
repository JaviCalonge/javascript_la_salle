// escribe un bucle que muestre 10 veces un mensaje por la consola con el text en color rojo y azul alternativamente


// for (i = 0; i < 10; i++) {

//   if (i % 2 === 0) {
//     console.log("%cHola, soy verde", "color: green")
//   } else {
//   console.log("%cHola, soy azul", "color:blue")
//   }
// }

// escribe un bucle que muestre los números del 0 al 20 y muestre a su lado "hola" si es multiple de 2, "adeu" si es multiple de 3 i "què tal?" si es múltiple de 5


// for (let i = 1; i < 21; i++) {
//   let missatge = i
//   if (i % 2 === 0) missatge += " hola"
//   if (i % 3 === 0) missatge += " adeu"
//   if (i % 5 === 0) missatge += " què tal?"
//   console.log(missatge);
// }


// fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre (fins a 1000 com a màxim)

//!



// fes un contador que només mostri els números que tinguin un dígit contingut a la string definida per l'usuari (amb prompt) fins a 100

function mostarNumeros() {

  numero = prompt("Escribe los números que quieras mostrar")


for (i = 0; i <=100; i++) {
  let string = i.toString()
  
  for (const char of string) {
    if (numero.includes(char)) {
      console.log(i)
      break
    }
  }
}

}

// mostarNumeros()



// llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau (useu BREAK); fins llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi amb el format:       
//                       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua

function listaCompra () {

  let lista = ""

  while (true) {

    input = prompt("¿Qué quieres añadir a la lista? (escribe 'break' para terminar):");

    if (input.toLowerCase() === 'break') {
        break;
    }

    lista += `-${input}\n`;
}

alert(`Lista de la compra:\n ${lista}`);

}

// listaCompra()


// Función que devuelva un número entero random ente a y b

// function aleatorio (n1) {

//   return Math.floor(Math.random() *n1) +1
// }

function rollDice(n) {
  return Math.floor(Math.random() * n) + 1;

}

console.log(rollDice(6)); 

function aleatorio(n1, n2) {
  return Math.floor(Math.random() * (n2 - n1 +1)) + n1 
}

console.log(aleatorio(3, 9))

// // Función que genera un número aleatorio entero entre min y max (ambos inclusive)
function numeroAleatorioEntero(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroAleatorioEntero(3, 9));
// // Ejemplo de uso:
// let min = parseInt(prompt("Introduce el número mínimo:"));
// let max = parseInt(prompt("Introduce el número máximo:"));

// if (!isNaN(min) && !isNaN(max) && min <= max) {
//   console.log("Número aleatorio entre " + min + " y " + max + ": " + numeroAleatorioEntero(min, max));
// } else {
//   console.error("Por favor, introduce números válidos y asegúrate de que el mínimo sea menor o igual que el máximo.");
// }


