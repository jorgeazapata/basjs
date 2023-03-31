let usuario = prompt("ingrese su usuario");
let equipo = prompt("ingrese el equipo");
let patron = prompt("ingrese peso patrón");
let peso = prompt("peso que registra la bascula");
let diferencia = patron - peso;
document.write("el usuario: " + usuario + "<br>" + "<hr>" +
 "Equipo: " + equipo + "<br>" + "<hr>" +
 "El peso patrón ingresado fue: " + patron + "<br>" + "<hr>" +
 "El peso ingresado fue: " + peso + "<br>" + "<hr>" +
 "La diferencia es: " + diferencia + "<hr>");
