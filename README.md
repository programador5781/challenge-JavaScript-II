# Desafíos de Algoritmos en JavaScript II

¡Bienvenido/a!

Este repositorio contiene una serie de desafíos de algoritmos en JavaScript que te ayudarán a mejorar tus habilidades de programación y lógica. Cada desafío está diseñado para poner a prueba tu capacidad para resolver problemas algorítmicos de manera eficiente.

<img align="right" alt="img" src="https://raw.githubusercontent.com/programador5781/challenge-JavaScript-II/main/Pull%20request-amico.png" width="50%" height="auto" />

## ¿Cómo funciona?

Cada desafío se presenta en un archivo separado junto con una descripción del problema y los requisitos. Tu objetivo es implementar una solución en JavaScript y verificar si tu implementación cumple con los casos de prueba proporcionados.


## Cómo utilizar este repositorio

1. Clona este repositorio en tu máquina local.

1.1 Instala las dependencias ejecutando :

```bash
npm install
```

2. Explora los diferentes desafíos en la carpeta "Desafíos". Cada desafío tiene su propio archivo con una descripción y requisitos.

3. Implementa tu solución para cada desafío en JavaScript.

4. Ejecuta las pruebas para verificar si tu solución es correcta. Las pruebas se encuentran en la carpeta `Test`  están escritas utilizando el framework de pruebas Jest.  
Para ejecutar las pruebas simplemente ejecuta:  

```bash
npm test
```

Esto correrá todos los test. Si deseas solo correr el test del ejercicio que estás trabajando solo ejecuta:  

```bash
npm test <nombre_del_archivo>.test.js
```

Ejemplo *npm test JSI.test.js* esto correrá el test para el ejercicio JSI

5. Si todas las pruebas pasan, ¡felicidades! Has resuelto el desafío con éxito. Si alguna prueba falla, revisa tu código y realiza las correcciones necesarias hasta que todas las pruebas pasen.

6. Si deseas que los test se ejecuten automáticamente sin que tu escribas el comando cada vez que terminas un ejercicio, entonces escribe el comando:

```bash
npm run test:watch
```
Nodemon se ejecutará y estará observando los cambios en los archivos. Cada vez que se detecte un cambio, nodemon ejecutará automáticamente el comando npm test, lo que a su vez ejecutará Jest y ejecutará los test.

Esto te permitirá tener un flujo de trabajo más eficiente mientras resuelves los ejercicios. Cada vez que guardes la posible solución de un desafío, nodemon detectará el cambio y volverá a ejecutar los test automáticamente sin necesidad de que escribas el comando npm test manualmente.

Si deseas detener la observación de cambios en los archivos por parte de nodemon, puedes interrumpir su ejecución en la línea de comandos presionando *Ctrl + C*. Esto detendrá la ejecución de nodemon y dejará de vigilar los cambios en los archivos.

Al presionar *Ctrl + C*, nodemon mostrará un mensaje indicando que se ha interrumpido la ejecución. A partir de ese momento, ya no se reiniciará automáticamente ni se ejecutará ninguna acción adicional en respuesta a los cambios en los archivos.

Es importante tener en cuenta que cada vez que desees volver a utilizar nodemon para observar cambios en los archivos y reiniciar automáticamente una aplicación o una tarea, deberás ejecutar el comando correspondiente nuevamente en la línea de comandos.  


## Carpeta con posibles soluciones  

Te animo a que intentes resolver estos ejercicios por tu cuenta antes de revisar las soluciones proporcionadas. La resolución de problemas es una habilidad clave en el mundo de la programación, y practicarla te ayudará a fortalecer tus habilidades y mejorar tu pensamiento lógico.

No te preocupes si encuentras dificultades en el camino. El aprendizaje proviene de enfrentar desafíos y superar obstáculos. No dudes en explorar diferentes enfoques, investigar y buscar ayuda cuando lo necesites.

## Contribuciones

Si tienes algún desafío interesante que te gustaría agregar a este repositorio, siéntete libre de hacer una solicitud de extracción. También puedes contribuir mejorando la documentación, agregando más casos de prueba o proporcionando soluciones alternativas.

¡Diviértete resolviendo los desafíos y mejorando tus habilidades de programación en JavaScript!

Si tienes alguna pregunta o necesitas ayuda con algún desafío, no dudes en abrir un problema o ponerte en contacto conmigo. 

¡Happy coding!

<sub>Credits to: <br/>[@freepik]
(<a href="https://storyset.com/people">People illustrations by Storyset</a>)</sub>

[!["Buy me a coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/programador5781)