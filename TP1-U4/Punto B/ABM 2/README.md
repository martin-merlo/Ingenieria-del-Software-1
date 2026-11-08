# TP1 U4 · Punto B · ABM 2

Registro de clientes con React, Vite y Chakra UI 2. La interfaz está en español y conserva la tabla, los iconos y el modal de la demostración. [Video de Will Dev](https://www.youtube.com/watch?v=FqbgZ3lwGnM) · [Repositorio de referencia](https://github.com/WilliamDosSantos/CRUD-ReactJS-ChakraUI)

Para abrirlo, ejecutá `npm.cmd run dev` desde esta carpeta y seguí la dirección que muestra Vite. El puerto predeterminado es 5175. En una copia nueva, instalá primero las dependencias con `npm.cmd ci`.

## Recorrido del video

| Minuto | Paso | Archivo |
| --- | --- | --- |
| [1:17](https://www.youtube.com/watch?v=FqbgZ3lwGnM&t=77s) | Preparar Vite y conectar el proveedor de Chakra UI | `src/main.jsx` |
| [3:23](https://www.youtube.com/watch?v=FqbgZ3lwGnM&t=203s) | Crear el modal con nombre, correo y botones para guardar o cancelar | `src/components/ModalComp.jsx` |
| [5:57](https://www.youtube.com/watch?v=FqbgZ3lwGnM&t=357s) | Validar el correo único y guardar el alta o la edición | `src/components/ModalComp.jsx` y `src/customers.js` |
| [7:39](https://www.youtube.com/watch?v=FqbgZ3lwGnM&t=459s) | Montar la tabla y abrir el modal al crear o editar | `src/App.jsx` |
| [11:54](https://www.youtube.com/watch?v=FqbgZ3lwGnM&t=714s) | Cargar los datos guardados y eliminar un cliente | `src/App.jsx` y `src/customers.js` |
| [13:36](https://www.youtube.com/watch?v=FqbgZ3lwGnM&t=816s) | Probar el alta, la edición, el correo duplicado y la baja | Aplicación en el navegador |

La lista empieza vacía. **NUEVO CLIENTE** abre el formulario y el lápiz carga los datos del cliente seleccionado. **CANCELAR** y la cruz cierran el modal. La papelera elimina el cliente. Los registros se guardan bajo la clave `cad_cliente` del almacenamiento local del navegador y se recuperan al recargar la misma dirección.

El proyecto usa versiones actualizadas compatibles con Chakra UI 2. Los iconos también se pueden accionar con el teclado y los campos usan la validación del navegador. La comparación de correos ignora mayúsculas y espacios al inicio y al final. Al editar, el correo del propio cliente está permitido.

`npm.cmd run lint` revisa el código. `npm.cmd run build` genera la versión de producción.
