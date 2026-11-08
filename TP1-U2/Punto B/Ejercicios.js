/**
 * Ejercicio 1
 */
function cualEsMayor(a,b) {
    return (a >= b) ? a : b;
}

let mayor = cualEsMayor(10,5);
console.log('Ejercicio 1:', mayor);

/**
 * Ejercicio 2
 */

function nombreResolucion(ancho,alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160) {
        return '4K';
    } else if (ancho >= 2560 && alto >= 1440) {
        return 'WQHD';
    } else if (ancho >= 1920 && alto >= 1080) {
        return 'FHD';
    } else if (ancho >= 1280 && alto >= 720) {
        return 'HD';
    } else {
        return false;
    }
}

let nombre = nombreResolucion(3840, 2160);

console.log('Ejercicio 2:', nombre);

/**
 * Ejercicio 3
 */

function getbyIdx(arr, idx) {
    if (idx < 0) {
        return 'El elemento no existe';
    } 
    if (arr.length <= idx) {
        return 'El elemento no existe';
    } else {
        return arr[idx];
    }
    
}

let resultado = getbyIdx([1,2],1);
console.log('Ejercicio 3:', resultado);

/**
 * Ejercicio 4
 */

console.log('Ejercicio 4:')
for (let i = 0; i < 10; i++) {
    if (i % 2 != 0){
        console.log('impar:', i);
    }
}

/**
 * Ejercicio 5
 */
let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor,mayor];
}

let numeros = getMenorMayor(array);
console.log('Ejercicio 5:', numeros);

/**
 * Ejercicio 6
 */

function cuantosPositivos(arr) { 
    let positivos = 0;
    for (numero of arr) {
        if (numero > 0) {
            positivos++;
        }
    }
    return positivos;
}

let positivos = cuantosPositivos(array);
console.log('Ejercicio 6:', positivos);

/**
 * Ejercicio 7
 */

function precioCompleto(precio, impuesto) {
    return precio + (precio * impuesto);
}

let resultadoPrecio = precioCompleto(19.90, 0.15);
console.log('Ejercicio 7:', resultadoPrecio);
/**
 * Ejercicio 8
 */

let arrayObjetos = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultadoPares = toPairs(arrayObjetos);
console.log('Ejercicio 8:', resultadoPares);

/**
 * Ejercicio 9
 */

let pairs = [
    [1, {name: 'Nicolas'}],
    [2, {name: 'Felipe'}],
    [3, {name: 'Chanchito'}]
];

function toCollection(arr){
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultadoCollection = toCollection(pairs);
console.log('Ejercicio 9:', resultadoCollection);

/**
 * Ejercicio 10
 */

let longitud = 7;

function crearArray(n) {
    if (n <= 0) {
        return [];
    }
    let arr = [];
    for (i = 0; i < n; i++) {
        arr[i] = i + 1;
        numero++;
    }
    return arr;
}

let resultadoArray = crearArray(longitud);
console.log('Ejercicio 10:', resultadoArray);