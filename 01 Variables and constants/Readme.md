## Variables

### Legacy
anteriormente en JS se utilizaba solo la palabra reservada 'var' para identificar variables, lo cual es un poco complicado a la hora de manejar el uso de constantes lo que nos lleva a definir ambos conceptos: 

### Constante
 En algunos lenguajes de programación una constante es un valor que no puede cambiar a lo largo de la ejecución de la rutina de código que la contiene, por su lado en Javascript una constante es una elemento que no puede cambiar el tipo de dato con el que fue creada inicialmente sin embargo si es permitido cambiar su valor, en el caso de los tipos de datos que no pueden cambiar su valor, se les denomina datos de solo lectura o readonly. (sin embargo este es un concepto que introduce TypeScript lo cual es un tópico mås avanzado). En el lenguaje jsvascript para declarar una constante se se utiliza la palabra reservada 'const'. 

** Capítulo 3 del libro: pagina 23**

Ejemplo:
```
const nombre = 'Jean' 
```

### Variables
Partendo del la definición anterior, una variable se diferencia de una constante en que podemos cambiar tanto su valor como el tipo de dato contenido en ella, como se mencionaba anteriormente, en los inicios del lenguaje de programación Javscript se utilizaba solo la palabra reservada 'var' para declarar constantes y variables, sin embargo, con la introducción de ES6 podemos utilizar la palabra reservada 'let' para declarar variables.

Ejemplo:
```
// en este ejemplo se cambia el tipo de dato de string (texto) a double (valor con decimales)
let pi = '3.1416'
pi = 3.141592
console.log(pi)
```

_Nota: prueba ambos ejemplos reemplazando el uso de let y const por var, se debe obtener el mismo resultado_

### Ejercicios
1. Calcule el area de un círculo conociendo el radio del mismo y pintelo en consola.
2. Conociendo la edad de 5 niños calcule el promedio de edades entre ellos y pintelo en consola.
3. Intentando escribir la menor cantidad de código posible sume el valor de dos números enteros y pinte el resultado en consola.
4. Simule una trasacción de retiro de dinero de un cajero automatico donde debe hacer lo siguiente:
    - Cree una constante con el valor actual de la cuenta del cliente.
    - Genere una variable con el monto a retirar.
    - Ejecute la operación (montoEnCuenta - valorARetirar).
    - Pinte en consola el monto retirado.
    - Pinte en consola el nuevo monto en la cuenta del cliente.
5. Realice el ejercicio 4 haciendo uso del módulo 'readline'. La unica módificacion que debe hacerse respecto al ejercicio anterior en sustituir el segundo paso por:
    - Solicite al cliente el monto a retirar.