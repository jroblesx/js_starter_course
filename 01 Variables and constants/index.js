var readline = require('readline');
{
    // una linea

    /*
    //usando const
   const nombre = 'Yeli'
   console.log(nombre)

   const nombreCompleto = nombre + ' Ynciarte' //concatenación
   console.log(nombreCompleto)
    */

   
   /*//usando let
   let nombre = 'Yeli'
   console.log(nombre)

   nombre = nombre + ' Ynciarte' //concatenación
   console.log(nombre)

   nombre = 18
   console.log(nombre)*/
   
   /*
   var nombre = 'Yeli'
   console.log(nombre)

   nombre = nombre + ' Ynciarte' //concatenación
   console.log(nombre)

   nombre = 18
   console.log(nombre)
   */

   /*
   //Ejercicio 1: a = pi * r2

    const pi = 3.1416
    const radio = 14 //metros
    const exponencialArea = 2

    let area = pi * (radio ** exponencialArea)
    console.log(typeof area)
    console.log(parseFloat(area).toFixed(6))
   */

    /*
    //Ejercicio 2:
    
    const numeroDeNinios = 5
    const edadNinio1 = 12, edadNinio2 = 13, edadNinio3 = 8, edadNinio4 = 7, edadNinio5 = 12
    let sumatoria = edadNinio1 + edadNinio2 + edadNinio3 + edadNinio4 + edadNinio5
    const promedio = sumatoria / numeroDeNinios
    console.log(Math.round(promedio))
    */

    /*
    Ejercicio 4: 

    let montoEncuenta = 50000
    const montoARetirar = 10000
    montoEncuenta = montoEncuenta - montoARetirar
    console.log(`monto retirado: ${montoARetirar} pesos`) // 'monto retirado: ' + montoARetirar + ' pesos'
    console.log(`nuevo monto en cuenta: ${montoEncuenta} pesos`)
    */
   
    /*
    Ejercicio 5: 
    
    */
    const rl = readline.createInterface(process.stdin, process.stdout)
    let montoEncuenta = 50000
    rl.question(
        'Cuanto quieres retirar: ',  //primero esto
        (montoARetirar) => { //luego la funcion de flecha
            montoEncuenta = montoEncuenta - montoARetirar
            console.log(`monto retirado: ${montoARetirar} pesos`) // 'monto retirado: ' + montoARetirar + ' pesos'
            console.log(`nuevo monto en cuenta: ${montoEncuenta} pesos`)
        });
}