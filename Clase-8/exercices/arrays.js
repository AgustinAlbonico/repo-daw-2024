var meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

console.log(meses[5], meses[11])
console.log(meses.sort())

meses.unshift("primer elemento"), meses.push("ultimo elemento")

meses.pop(), meses.shift()

meses.reverse()

meses.join(', ')

var mesesCopia = meses.slice(5)
