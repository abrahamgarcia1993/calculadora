  const pantalla = document.querySelector(".pantalla");
  const botones = document.querySelectorAll(".btn");

  let operacionActual = "";
  let resultadoMostrado = false;

  botones.forEach(boton => {
      boton.addEventListener("click", () => {
          const botonTexto = boton.textContent;
//si  clickas la C se resetea la operacion y la pantalla se pone a 0
          if (botonTexto === "C") {
              operacionActual = "";
              pantalla.textContent = "0";
//borramos el último caracter seleccionado
          } else if (botonTexto === "←") {
              if (operacionActual.length > 0) {
                  operacionActual = operacionActual.slice(0, -1);
                  pantalla.textContent = operacionActual || "0";
              }
//si le damos a igual realizamos la operacion
          } else if (botonTexto === "=") {
//eval hace las operaciones con string
                  operacionActual = eval(operacionActual).toString();
                  pantalla.textContent = operacionActual;
                  resultadoMostrado = true;
// mostramos el resultado si existe
          } else {
              if (resultadoMostrado) {
                  operacionActual = botonTexto;
                  resultadoMostrado = false;
              } else {
                  operacionActual += botonTexto;
              }
              pantalla.textContent = operacionActual;
          }
      });
  });

