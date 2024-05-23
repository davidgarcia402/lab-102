
//LAB7_Refactorización
function capturarBienvenida() {
  const nombre = prompt("¿Cual es tu nombre?");
  const colores = prompt("¿Cual es tu color favorito? ¿Rojo o azul?");
  const resultado = confirm("¿Seguro que es color " + colores +"?");
  console.log(nombre + " " + colores);  
    while(colores === "Rojo" || colores === "rojo"|| colores === "ROJO" || 
          colores === "Azul" || colores === "azul"|| colores === "AZUL"){
            convertirColor(nombre, colores);
            break;
    }
}

//LAB8_Operadores y bucles
function convertirColor(nombre, colores) {
  if(colores === "Rojo" || colores === "rojo"|| colores === "ROJO"){
    return document.write("<h2 style='color: red'>Bienvenido "+ nombre + "!!!</h2>")
  }else{
    return document.write("<h2 style='color: blue'>Bienvenido "+ nombre + "!!!</h2>")
  }
}

function imprimirEstrellas() {
  for (let i = 1; i <= 5; i++) {
    document.write("<img src='Estrella.png' alt='5_estrellas_calidad' width= 5%  height=5%/>");
  }
}