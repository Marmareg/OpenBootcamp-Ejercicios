/*Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout
y pase por consola un "Hola soy una promesa"
5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos*/



// sin parametros
function sinParametros(){
    return true;
}


// asincrona
setTimeout(asincrona ,5000);

function asincrona(){
    console.log("Hola soy una promesa");
}

// generadora

function* generaIndices() {
    let indice = 0;
    while (true) {
        yield indice += 2
    }
    
    }

const genera = generaIndices();

console.log(genera.next().value);
console.log(genera.next().value);
console.log(genera.next().value);
console.log(genera.next().value);