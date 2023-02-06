//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let dato = 10;
var i = dato-1;


while(dato){
    dato *= i;
    i--;
    if (i <= 1) break;
}
console.log(dato);