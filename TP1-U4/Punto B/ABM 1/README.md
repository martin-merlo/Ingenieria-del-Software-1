# TP1 U4 · Punto B · ABM 1

ABM de empleados basado en el [tutorial de Manoj Deshwal](https://www.youtube.com/watch?v=3IwGjihXHis). La pantalla principal conserva los datos de ejemplo, el orden de las columnas y los controles de React Bootstrap.

## Ejecutar

Desde esta carpeta, ejecutar `npm.cmd run dev` y abrir la dirección que indique Vite. El puerto predeterminado es 3000. Si abrís una copia sin las dependencias instaladas, ejecutá primero `npm.cmd ci`.

## Paso a paso

| Minuto | Paso | Dónde verlo |
| --- | --- | --- |
| [0:00](https://www.youtube.com/watch?v=3IwGjihXHis&t=0s) | Crear el proyecto y los tres registros de ejemplo | `Employees.js` |
| [2:08](https://www.youtube.com/watch?v=3IwGjihXHis&t=128s) | Mostrar el arreglo en una tabla de Bootstrap | `Home.jsx` |
| [7:01](https://www.youtube.com/watch?v=3IwGjihXHis&t=421s) | Configurar el listado y las rutas de alta y edición | `App.jsx` |
| [10:46](https://www.youtube.com/watch?v=3IwGjihXHis&t=646s) | Buscar por id y eliminar el registro de la tabla | `Home.jsx` |
| [16:03](https://www.youtube.com/watch?v=3IwGjihXHis&t=963s) | Capturar nombre y edad, generar el id con UUID y agregar al arreglo | `Add.jsx` |
| [26:05](https://www.youtube.com/watch?v=3IwGjihXHis&t=1565s) | Cargar los datos seleccionados y actualizar el registro | `Edit.jsx` |
| [31:09](https://www.youtube.com/watch?v=3IwGjihXHis&t=1869s) | Conectar Edit al registro seleccionado mediante `localStorage` | `Home.jsx` y `Edit.jsx` |

Los cuatro archivos de empleados están en `src/components`. Usá **Create** para agregar, **Edit** para modificar y **DELETE** para quitar un empleado. Si la lista queda vacía, muestra **No data available**. Al recargar, el arreglo vuelve a sus tres registros iniciales, como en el video. El navegador conserva la selección para rellenar el formulario de edición.

El proyecto usa Vite y archivos `.jsx` para los componentes. Se añadieron validación de campos requeridos al enviar, un regreso al listado cuando no hay un registro válido para editar y márgenes más chicos en pantallas estrechas.

Podés verificar el código con `npm.cmd run lint` y compilar con `npm.cmd run build`.
