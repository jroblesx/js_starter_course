const readline = require("readline");
const consola = require("./dibujar");
{
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.question("Ingrese su edad: ", (edad) => {
    const edadUsuario = parseInt(edad);
    if (edadUsuario >= 18) {
      consola("usuario mayor de edad");
    } else {
      consola("usuario menor de edad");
    }
  });
}
