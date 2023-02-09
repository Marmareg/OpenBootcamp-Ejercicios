/* Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/


const sobreMi = {
    nombre: "María",
    apellido:"Martínez",
    edad: 40,
    altura: 180,
    isDeveloper: true
}


const edad = "edad"
console.log(sobreMi[edad]);



const amigos = [
{
    nombre: "María",
    apellido:"Martínez",
    edad: 40,
    altura: 180,
    isDeveloper: true
},

{
    nombre: "Paco",
    apellido:"León",
    edad: 45,
    altura: 190,
    isDeveloper: true
},

{
    nombre: "Paquita",
    apellido:"Salas",
    edad: 50,
    altura: 160,
    isDeveloper: true
}

]


amigos.sort((a, b) => b.edad - a.edad)

console.log(amigos);


