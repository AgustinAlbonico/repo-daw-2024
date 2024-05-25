var s1 = 'texto prueba'

s1 = s1.toUpperCase()

var s2 = s1.substring(0, 5)
var s3 = s1.substring(s1.length - 3)
var s4 =
  s1.substring(0, 1).toLocaleUpperCase() + s1.substring(1).toLocaleLowerCase()
var posicionEspacioBlanco = s1.indexOf(' ')

var s5 = 'programacion desarrollo'

let spaceIndex = s5.indexOf(' ')

let primeraPalabra = s5.substring(0, spaceIndex)
let segundaPalabra = s5.substring(spaceIndex + 1)

let primeraPalabraCompleta =
  primeraPalabra.charAt(0).toUpperCase() + primeraPalabra.slice(1).toLowerCase()
let segundaPalabraCompleta =
  segundaPalabra.charAt(0).toUpperCase() + segundaPalabra.slice(1).toLowerCase()

let palabraCompleta = primeraPalabraCompleta + ' ' + segundaPalabraCompleta
