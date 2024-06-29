// userName es una variable que tiene dentro una String
userName = "Omar";
userSurname = 'Olmedo';
const ESPACIO = " ";

// una String con backticks es un template literal
userTitle = `Professor`;

console.log(userTitle);
console.log(userName);
console.log(userSurname);

console.log(userTitle, userName, userSurname);

userName = "Pablo";

console.log(userTitle + ' ' + userName + ' ' + userSurname);
console.log(userTitle + ESPACIO + userName + ESPACIO + userSurname);

userSurname = "Rodríguez";

console.log(`¿Qué tal estás, ${userName} ${userSurname}?`);

userAge = 33; // Number
userExperience = 10;
userHasHair = false; // Boolean

console.log(userName + userAge);
console.log(userAge + userExperience);

userExperience = "diez";
console.log(userAge + userExperience);

console.log("Edad: " + userAge, "\nAños de experiencia: " + userExperience);

// ESPACIO = "-";

a = 1;
b = 2;

// c = a;
// a = b;
// b = c;

[a, b] = [b, a]

console.log(a, b); //2, 1

animals = ["perro", "gato", "pajaro", "jirafa", "ballena"]

console.log(animals);

console.log(animals.length);

console.log(animals[2]);



//--------------------------------------------------//


alumno = {
  name: "Javier",
  lastname: "Calonge",
  ciudad: "Tarragona",
  edad: 44,
  hobbies: "Programar"
}

alumno.pueblo = "Ardenya"

alumno.hobbies = "Estudiar"

console.log(alumno.length);



//_______---------------___________//

familia = 
[{
  name: "Javier",
  lastname: "Calonge",
  ciudad: "Tarragona",
  edad: 44,
  hobbies: "Programar"
}
,
 {
  name: "Juuli",
  lastname: "Pylkannen",
  ciudad: "Tarragona",
  edad: 27,
  hobbies: "Marketing"
}
,
 {
  name: "Adrián",
  lastname: "Garcia",
  ciudad: "Cabrera",
  edad: 12,
  hobbies: "Futbol"
}
,
 {
  name: "Álvaro",
  lastname: "Garcia",
  ciudad: "Cabrera",
  edad: 9,
  hobbies: "Música"
}
,
 {
  name: "Nandy",
  lastname: "Moreno",
  ciudad: "Premia",
  edad: 71,
  hobbies: "Bailar"
}]

familia[4].edad = 99;


nombres = [familia[0].name, familia[1].name, familia[2].name, familia[3].name, familia[4].name]

edades = [familia[0].edad + familia[1].edad + familia[2].edad + familia[3].edad + familia[4].edad]


console.log(nombres);
console.log(edades);
console.log(nombres, edades);

console.log(`${familia[0].name} ${familia[0].lastname} tiene ${familia[0].edad} años, vive en ${familia[0].ciudad} y le gusta ${familia[0].hobbies}. ${familia[1].name} ${familia[1].lastname} tiene ${familia[1].edad} años, vive en ${familia[1].ciudad} y le gusta ${familia[1].hobbies}. ${familia[2].name} ${familia[2].lastname} tiene ${familia[2].edad} años, vive en ${familia[2].ciudad} y le gusta ${familia[2].hobbies}. ${familia[3].name} ${familia[3].lastname} tiene ${familia[3].edad} años, vive en ${familia[3].ciudad} y le gusta ${familia[3].hobbies}. ${familia[4].name} ${familia[4].lastname} tiene ${familia[4].edad} años, vive en ${familia[4].ciudad} y le gusta ${familia[4].hobbies}.`);

console.table(familia);