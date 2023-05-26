# Notas de la autora

Para ejecutar el proyecto necesitaremos una versión de node 14.18.3 o superior.

Para ejecutar el proyecto primero hemos de arrancar la api mock ejecutando:

`npm run mocks`

Después debemos arrancar el proyecto ejecutando:

`npm run dev`

Este proyecto cuenta con tests en Jest y Cypress.

Para ejecutar los test usaremos respectivamente:

`npm run test`
`npm run cy:test`

Aunque para este último también podemos ejecutar el entorno visual de Cypress ejecutando:

`npm run cy:open`

## Desarrollo

Respecto al desarrollo del proyecto, debo decir que ha sido una experiencia muy gratificante. Me ha resultado muy entretenido de realizar y me he enfrentado a algunos retos, como por ejemplo:

- maquetación de los elementos flotantes de las cards
- solución de errores técnicos relacionados con la api mock y el proyecto
- implementación de Grid y su diseño responsive

Para el proyecto me he servido de la herramienta Vite como task y package manager, en conjunto con React.


He utilizado Sass y he seguido la metodología BEM para anidar las clases de CSS.

He de decir que si bien me he ajustado a los PSDs por lo general, el proyecto cuenta con ligeras variaciones de color o en los márgenes. Esto ha sido una decisión personal para mejorar la accesibilidad del proyecto, ya que al ser un catálogo de imágenes tan dispares, si elegía colores claros no se apreciarían bien en aquellas imágenes con fondo claro y viceversa, por lo que he optado por una combinación de colores fuertes que se puedan apreciar con cualquier imagen de fondo.

En cuanto al control de versiones, el proyecto cuenta con Git y está subido a mi repositorio de GitHub [aquí](https://github.com/GemaMesasV/SAMY-frontend-test)
Se ha utilizado el sistema de Conventional Commits para su realización.

Por todo esto, me siento orgullosa de mi aprendizaje durante el proyecto y del resultado final.
Cualquier feedback constructivo será siempre bien recibido :smiley:.

# Requerimientos

Necesitamos desarrollar una Single Page Application (SPA) que muestre la información de nuestras imagenes:

1. Mostrar todas las imagenes con un scroll infinito.
2. Filtrar el contenido a través de una búsqueda (No es necesario que el resultado sea coherente).
3. Realizar un like/unlike de cada uno de los items. UI responsive.

# Información

En el momento del desarrollo de la aplicación cliente, el API no se encuentra desarrollada, por
lo que esta incluida una api mock que simula el comportamiento de la API.

Para arrancar la api mock simplemente ejecutar:

`npm run mocks`

## Endpoints

### `GET http://localhost:3100/images`

```json
[
  {
    "type": "Image",
    "id": 2,
    "title": "Train in India-Agra",
    "author": "SamyRoad",
    "created_at": "2012-12-12T21: 08: 20Z",
    "main_attachment": {
      "big": "http://lorempixel.com/400/500/",
      "small": "http://lorempixel.com/100/125/"
    },
    "likes_count": 5,
    "liked": true,
    "links": [
      {
        "rel": "avatar",
        "uri": "http://lorempixel.com/250/250/",
        "methods": "GET"
      },
      {
        "rel": "like",
        "uri": "http://localhost:3100/images/2/likes",
        "methods": "POST"
      }
    ]
  },
  ...
]
```

Se puede utilizar los query params `search` y `page` para simular la busqueda y paginación.

### `POST http://localhost:3100/images/:id/likes`

Espera un body vacio y respondera con un 204 si todo ha ido correctamente, simula la acción de like.

# Diseño

La visualización de la aplicación cambia dependiendo del dispositivo que se este utilizando.

- En el caso de que se utilice un dispositivo móvil, se debe de mostrar la aplicación siguiendo el diseño mobile.psd.
- En el caso que se utilice una pantalla mayor, se debe de utilizar el diseño web.psd, con un mínimo de 2 columnas y un máximo de 4.

Los diseños se pueden encontrar [aqui](https://www.dropbox.com/sh/r1fp5nz7x046kjt/AACQdbp6bZlv2pNtCN2lTEoEa?dl=0).

Si no dispones de photoshop puedes usar [photopea](https://www.photopea.com/).

# Implementación

- Diseñar e implementar la aplicación usando preferiblemente React.
- HTML y estilos responsive a partir de los PSDs: mobile para móviles y web para Desktop.

Se valorarán los siguientes puntos:

- Tests de la aplicación.
- Usar “BEM methodology”.
- El uso de algún “package manager”.
- El uso de algún “task manager”.
