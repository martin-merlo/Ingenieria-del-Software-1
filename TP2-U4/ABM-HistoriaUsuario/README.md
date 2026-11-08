# Ejercicio E · ABM de direcciones

Proyecto React y Vite para administrar las direcciones de entrega. El alta sigue el formulario de la consigna. El listado agrega los accesos a edición y baja que pide el ABM.

Desde esta carpeta, ejecutá `npm.cmd run dev` y abrí la dirección que muestra Vite. El puerto predeterminado es 5177. Si abrís una copia nueva, ejecutá primero `npm.cmd ci`.

El formulario solicita latitud y longitud en un campo, separadas por coma. Podés usar `-34.6037, -58.3816` como ejemplo. Las ciudades y sus zonas de entrega forman un catálogo de demostración.

Las operaciones confirmadas se guardan en el almacenamiento local de la misma dirección del navegador. El listado empieza vacío y recupera las direcciones guardadas al recargar.

Las [historias de usuario y criterios de aceptación](HISTORIAS-DE-USUARIO.md) incluyen el alta solicitada y las operaciones de modificación y baja. Para verificar la compilación, ejecutá `npm.cmd run build`.
