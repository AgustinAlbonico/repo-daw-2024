function suma(n1, n2) {
  return n1 + n2
}

var sum = suma(10, 20)
console.log(sum)

function suma2(n1, n2) {
  if (Number(n1) && Number(n2)) {
    return n1 + n2
  } else {
    console.log('Los parametros tienen un formato incorrecto')
    return NaN
  }
}

console.log(suma2('asdas', 5))

function validateInteger(n1) {
    return typeof n1 === 'number' && Math.floor(n1) === n1;
}