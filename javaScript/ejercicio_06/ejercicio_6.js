/* Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/

let lista = ["sal", "arroz", "vino", "mostaza", "pasta"];
console.log(lista);
lista.push("Aceite de Girasol");
console.log(lista);
lista.pop();
console.log(lista);

let peliculas = [

{
    titulo: "Matrix",
    director: "Hermanas Wachowski",
    fecha: '1999-10-18'
},
{
    
    titulo: "Amélie",
    director: "Jean-Pierre Jeunet",
    fecha: '1999-02-15'
    
},

{
    
    titulo: "Argo",
    director: "Ben Affleck",
    fecha: '2012-05-22'

}

]

//filter
const peliculasPosteriores = peliculas.filter(obj => obj.fecha > '2010-01-01' )
console.log(peliculasPosteriores);

//map
const directores = peliculas.map(obj => obj.director)
console.log(directores);

//map
const titulos = peliculas.map(obj => obj.titulo)
console.log(titulos);

//concat
const direcTitulosConcat = directores.concat(titulos);
console.log(direcTitulosConcat)

//propagacion
const direcTitulosProp = [...directores, ...titulos];
console.log(direcTitulosProp)