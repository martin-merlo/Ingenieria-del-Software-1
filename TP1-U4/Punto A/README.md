# Aprendiendo React — TP1 U4, Punto A

Reproducción de los ejercicios del tutorial de JuanDavid_Dev: [Domina React JS: Componentes, Hooks, Estados, Renderizado Condicional y Más](https://www.youtube.com/watch?v=fCl2hBENNkw).

El proyecto está directamente en `Punto A`. La página conserva el orden, los textos, los controles nativos y los separadores del video. `src/index.css` está vacío, tal como queda después de limpiar el proyecto inicial. No hay bibliotecas de estilos.

## Ejecutar

Desde una terminal ubicada en esta carpeta:

```sh
npm install
npm run dev
```

Abrir la dirección que indique Vite, normalmente http://localhost:5173. Si las dependencias ya están instaladas, alcanza con `npm run dev`. En PowerShell, si una política impide ejecutar `npm.ps1`, usar `npm.cmd run dev`.

## Recorrido del video

| Minuto | Paso | Archivos y resultado |
| --- | --- | --- |
| 00:57–06:22 | Crear con Vite, React y JavaScript; limpiar la plantilla | `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css`; título «Aprendiendo React» |
| 06:22–13:42 | Componentes y props | `Props.jsx` recibe `nombre` y `apellidos` desde `App.jsx`; muestra «hola, Juan Pérez» |
| 13:47–21:53 | Estado del contador | `Contador.jsx`; incrementar, decrementar y limpiar |
| 21:53–26:41 | Compartir estado entre componentes | El estado pasa a `App.jsx`, `Contador.jsx` recibe el valor y `Controles.jsx` recibe `setContador`; utiliza el estado anterior |
| 26:41–33:11 | Evento onChange | `InputTexto.jsx`; el párrafo refleja lo que se escribe |
| 33:11–41:29 | Dos campos y un solo objeto de estado | `Formulario.jsx`; `formData` contiene nombre y apellido; la copia del estado conserva el otro campo |
| 41:29–45:38 | Enviar el formulario | El ejemplo evoluciona a un `form` con `onSubmit`; `preventDefault()` evita la recarga y los datos aparecen en la consola |
| 45:38–50:54 | Renderizado condicional con ternario | `MensajeCondicional.jsx`; alterna el texto según exista un mensaje |
| 50:54–53:43 | Operador && y alerta | El botón Enviar solo aparece con un mensaje y abre la alerta del navegador |
| 53:43–1:02:10 | Alternar componentes | `Login.jsx`, `Logout.jsx`, `Sesion.jsx`; cambia el componente y el texto del botón |
| 1:02:10–1:06:28 | useEffect al montar | `MensajeConsola.jsx`; escribe el mensaje en la consola |
| 1:06:28–1:10:55 | Combinar useState y useEffect | `ContadorEfect.jsx`; incrementa de dos en dos y registra el contador en la consola |
| 1:10:55–1:16:33 | Consumir una API | `ConsumoApi.jsx`; `fetch`, async/await, try/catch y `JSON.stringify(data, null, 2)` |

Todos los nombres de esta tabla corresponden a archivos dentro de `src/components`, salvo donde se indica otra ruta. Los componentes quedan en su versión final: por eso el primer contador tiene el estado en `App.jsx` y el formulario ya no muestra el párrafo de nombre completo que aparece durante la explicación intermedia.

## Comprobar los ejercicios

- Incrementar y decrementar el primer contador; Limpiar lo devuelve a cero. También admite valores negativos, como el ejemplo.
- Escribir en «Escribe algo» y comprobar el párrafo «Has escrito».
- Completar nombre y apellido y pulsar Enviar. En F12 → Consola aparecen los datos; la página no se recarga.
- Escribir un mensaje: aparece el botón Enviar y cambia el párrafo. Enviar abre una alerta; al borrar el texto, el botón desaparece.
- Iniciar sesión y cerrar sesión alternan dos componentes. Es una demostración de estado local, sin un servicio de autenticación.
- El segundo contador aumenta de dos en dos y registra su valor en la consola, independientemente del primero.
- Al cargar la página, el último ejercicio consulta `https://api.sampleapis.com/beers/ale` y muestra la respuesta JSON con sangría. Usa el mismo servicio que el video; sus datos actuales y su disponibilidad pueden cambiar. No se reemplaza por datos estáticos.

`StrictMode` se conserva en `main.jsx`. En desarrollo, React puede ejecutar los efectos iniciales dos veces; esto explica los mensajes duplicados que también aparecen en el tutorial.

## Herramientas

La plantilla se generó con el comando oficial de Vite para React y JavaScript. Las dependencias son las disponibles al preparar este proyecto, no una copia de las versiones de 2024 del autor. La plantilla actual usa Oxlint para revisar el código. Estas diferencias de herramientas no agregan estilos ni cambian los ejercicios. Las versiones exactas instaladas quedan registradas en `package-lock.json`.

```sh
npm run lint
npm run build
npm run preview
```

El formato y algunos imports se normalizaron; el código reconstruye el resultado final del tutorial, no los errores temporales que el autor corrige mientras escribe.
