const readline = require("readline");
const consola = require("./dibujar");

{
  const rl = readline.createInterface(process.stdin, process.stdout);
  let mujeres = false,
    hombres = false,
    indefinido = false;

  rl.question(
    `Ingrese su genero: 
    - M (Mujer) 
    - H (Hombre) `,
    (genero) => {

        if(genero != "M" && genero != "H"){ // si se utiliza esto no es necesario declarar las variables ni el uso del switch
            consola("El usuario ha decidido no compartir su género")
        }

        // switch (genero) {
        //     case 'M':
        //         mujeres = true;
        //         break;
        //     case 'H':
        //         hombres = true;
        //         break;
        //     default:
        //         indefinido = true;


        //     if(indefinido) { // igual que decir: if(indefinido == true)
        //         consola("El usuario ha decidido no compartir su género")
        //     }
        // }

    }
  );
}
