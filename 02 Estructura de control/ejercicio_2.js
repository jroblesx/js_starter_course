const readline = require("readline");
const consola = require("./dibujar");
{
  const rl = readline.createInterface(process.stdin, process.stdout);
  let mujeres = 0,
    hombres = 0,
    indefinido = 0;

  rl.question(
    `Ingrese su genero: 
- M (Mujer) 
- H (Hombre) `,
    (genero) => {
      if (genero === "M") {
        mujeres++;
      } else if (genero === "H") {
        hombres++;
      } else {
        indefinido++;
      }

      rl.question(
        `Ingrese su genero (2): 
    - M (Mujer) 
    - H (Hombre) `,
        (genero) => {
          rl.question(
            `Ingrese su genero (3): 
        - M (Mujer) 
        - H (Hombre) `,
            (genero) => {
              if (genero === "M") {
                mujeres++;
              } else if (genero === "H") {
                hombres++;
              } else {
                indefinido++;
              }

              rl.question(
                `Ingrese su genero (4): 
                - M (Mujer) 
                - H (Hombre) `,
                (genero) => {
                  if (genero === "M") {
                    mujeres++;
                  } else if (genero === "H") {
                    hombres++;
                  } else {
                    indefinido++;
                  }

                  rl.question(
                    `Ingrese su genero (5): 
                        - M (Mujer) 
                        - H (Hombre) `,
                    (genero) => {
                      if (genero === "M") {
                        mujeres++;
                      } else if (genero === "H") {
                        hombres++;
                      } else {
                        indefinido++;
                      }

                      consola(
                        `${indefinido} personas decidieron no compartir su género`
                      ); // Es lo mismo que decir: indefinido + " personas decidieron no compartir su género"
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
}
