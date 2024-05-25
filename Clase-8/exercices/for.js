var array = ["manzana", "banana", "naranja", "durazno", "kiwi"];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (var i = 0; i < array.length; i++) {
    var palabra = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    console.log(palabra);
}

var sentence = ""

for (var i = 0; i < array.length; i++) {
    sentence += array[i] + " "
}

var arrayVacio = []

for (var i = 0; i < 10; i++) {
    arrayVacio[i] = i    
}

console.log(arrayVacio)