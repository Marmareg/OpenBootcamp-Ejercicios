//Este archivo debe calcular el factorial de 10 utilizando un solo bucle for



const dato = 10; // Número del que queremos calcular el factorial
let resultado = dato; // variable donde almacena 
for(let i = dato -1; i>0; i--){
    resultado *= i;
}
console.log(resultado);

