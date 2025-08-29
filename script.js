function calulcar(a,b){
   return Math.sqrt(a**2 + b ** 2);
}
const hipotenusa = calulcar(3,4);
console.log(hipotenusa)

const ts = Date.now();

document.write("<p> hollaaaaaaaaaaaaaaaaa </p>")
document.write("<p> hollaaaaaaaaaaaaaaaaa"+ ts +"</p>")


function calcularEdad(edad) {
  if (edad > 0) {
    if (edad < 18) {
      console.log("Eres menor de edad");
    } else if (edad < 65) {
      console.log("Persona es adulto");
    } else if (edad < 85) {
      console.log("Persona es adulto mayor");
    } else {
      console.log("Persona es de años dorados");
    }
    return edad;
  } else {
    console.log("Ingrese edad válida");
    return null;
  }
}

function getData(form) {
  var formData = new FormData(form);
  var dataObj = Object.fromEntries(formData); // ← ahora sí está definido

  // Mostrar cada campo
  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  // Validar edad
  var edadNum = parseInt(dataObj.edad);
  if (isNaN(edadNum)) {
    console.log("Edad no válida");
    return;
  }

  calcularEdad(edadNum);

  // Mostrar objeto completo
  console.log(dataObj);
  console.log(JSON.stringify(dataObj, null, 4));
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
});
console.table(dataObj);