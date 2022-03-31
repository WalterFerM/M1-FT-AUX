
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"

    let newArr = [];
    for ( let i=0; i<array.length; i++) {
        if(array[i] < 9 && array[i]>=0) {
            newArr.unshift(array[i])
        }
    }

    return newArr;
};

// let test = [1, 4, 24, 10, 8];
// let test2 = [2, 30, 5, 3, 15]
// console.log(invertirOrden(test));
// console.log(invertirOrden(test2));


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro.
    // Buscar y retornar el valor en comun entre ellos.
    // Deberia retornar el numero en comun entre los arrays que 
    // recibe por parametro, en caso de no haber numero en comun 
    // de, devolver el numero mas pequeño

    let min= Math.min(...array1, ...array2)
    
    for(let i = 0; i <array1.length; i++){
        for(let j=0; j < array2.length; j++){
            if(array1[i]===array2[j]){
                return array1[i];
            } 
        }
    }
    return min;

};

// let arra1 = [10, 7, 50];
// let arra2 = [20, 5, 8];
// // let arra2 = [20, 8, 10];
// console.log(numeroEnComun(arra1, arra2))


function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.

let solv = []

};

let t1 = [[1, 3], [10, 20], [4, 5], 2];
// // let t2 = [[5, 5], 4, [10, 15], [25, 10]];
console.log(sumaDeArrays(t1));

function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false


};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    
    let min = Math.min(...array);
    let max = Math.max(...array);
    return new Array(min, max);
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};