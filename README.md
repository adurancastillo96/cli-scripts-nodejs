# Creación de pequeños scripts para practicar con NodeJS

## 0-show-os.info.js

Importa el módulo interno ['os' de NodeJS](https://www.geeksforgeeks.org/node-js-os/)
Usa sus diferentes métodos para obtener la siguiente información sobre tu sistema operativo. Muestralo por consola.

- Nombre del equipo
- Edición/Versión del sistema operativo
- Memoria ram total en \*\*GB

![](https://oscarm.tinytake.com/media/16472f3?filename=1718261870512_TinyTake13-06-2024-08-57-31_638538586701702054.png&sub_type=thumbnail_preview&type=attachment&width=731&height=800)

Resultado esperado:

![](https://oscarm.tinytake.com/media/16479bb?filename=1718275333324_TinyTake13-06-2024-12-42-09_638538721325255329.png&sub_type=thumbnail_preview&type=attachment&width=1196&height=156)

## 1-throw-dice-6

Crea un script que simplemente, cuando lo ejecutes, muestre un número entre 1 y 6

## 2-throw-custom-dice

Crea un script que al ejecutarlo lanza un dado de tantas caras como valor del primer parámetro del script. Se usa de la siguiente manera:

```
node 2-throw-custom-dice.js        # tira un dado de 6 caras -> Debería mostrar un número entre 1 y 6 (porque no se ha especificado ningún parámetro)
node 2-throw-custom-dice.js 20    # tira un dado de 20 caras -> Debería mostrar un número entre 1 y 20
node 2-throw-custom-dice.js 100    # tira un dado de 100 caras -> Debería mostrar un número entre 1 y 100
```

## 3-nickname-generator

El fichero _3-nickname-generator.js_ contiene la implementación de un ejercicio que realizó nuestra ex compañera [Denisse](https://github.com/Denissevar)
Usa adecuadamente la función que contiene para crear un script en NodeJS que permita pasar un string a la función y muestre por consola el resultado. NO TOQUES el cuerpo de la función

```
node 3-nickname-generator.js Robert # Debería mostrar por consola "Rob"
node 3-nickname-generator.js Douglas # Debería mostrar por consola "Doug"
node 3-nickname-generator.js Emma # Debería mostrar por consola "Emma"
node 3-nickname-generator.js Ian # Debería mostrar por consola "Error: Name too short"
```

## ChatGPT Desencadenado: 4-check-dni

Hacienda tiene un listado ya preparado de todos los que tienen que pagar en la siguiente declaración de la renta.
Usa Chat GPT para generar un script que

- Reciba un DNI
- Busque el DNI en el fichero dnis_con_deuda.txt
- Si existe el DNI debe devolver un mensaje indicando que la persona que posee dicho DNI tendrá que pagar en la declaración y qué cantidad

```
node 4-check-dni 10000086P # Debería mostrar por consola algo así como "El contribuyente 10000086P le toca pagar 285€"
node 4-check-dni 27681570N # Debería mostrar por consola algo así como "El contribuyente 27681570N no le toca pagar"

```

Intenta darle más valor a tu script con funcionalidades interesantes. ¿Que debería pasar si el dni no es válido?

Si te animas, [comparte](https://oscarm.tinytake.com/media/1755b80?filename=1745421837041_TinyTake23-04-2025-05-23-53_638810186360894933.png&sub_type=thumbnail_preview&type=attachment&width=1194&height=93) en el canal #labs-help- la forma que has ido usando Chat GPT para conseguir la solución final. La idea es ver cómo usamos la IA para generar soluciones que a priori no sabemos implementar.
