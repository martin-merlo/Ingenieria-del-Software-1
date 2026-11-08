# Ejercicio E · Historias de usuario y criterios de aceptación

## HU 01 · Registrar una dirección de entrega

Como cliente de la aplicación de delivery, quiero guardar una dirección con un alias para identificarla y reutilizarla en un próximo pedido.

| Dado | Cuando | Entonces |
| --- | --- | --- |
| Estoy en Mis direcciones | Pulso **Agregar dirección** | Se abre el formulario vacío con los campos del prototipo. |
| Estoy completando el formulario | Selecciono una ciudad o cambio la seleccionada | El sistema habilita el selector de localidad con las opciones de esa ciudad y limpia la localidad anterior. |
| Falta completar Coordenadas, Calle, Número, Ciudad, Localidad o Alias | Pulso **Guardar** | El formulario queda abierto, se indican los campos pendientes y el listado conserva sus datos. |
| Ingresé coordenadas con un formato incorrecto o fuera del rango de latitud o longitud | Pulso **Guardar** | Se muestra un aviso en Coordenadas. Se espera una latitud y una longitud separadas por coma. |
| Completé los campos requeridos con datos válidos | Pulso **Guardar** | La dirección se agrega al listado con su alias. Piso, Depto y Aclaraciones pueden quedar vacíos. |
| Escribí datos en el formulario | Pulso **Cancelar** o la cruz | Se cierra el formulario y el listado conserva sus datos. |
| Guardé una dirección | Recargo la página | La dirección sigue disponible en el listado. |

## HU 02 · Modificar una dirección de entrega

Como cliente, quiero corregir una dirección guardada para que mis datos de entrega estén actualizados.

| Dado | Cuando | Entonces |
| --- | --- | --- |
| Tengo una dirección guardada | Pulso **Editar** en esa dirección | Se abre el formulario con los datos actuales, incluidos los campos opcionales. |
| Estoy editando una dirección | Pulso **Guardar** con datos válidos | Se actualiza ese registro, se cierra el formulario y los cambios se conservan al recargar. |
| Estoy editando una dirección | Intento guardar con datos inválidos o pulso **Cancelar** | Si hay errores, el formulario los muestra. Si cancelo, el formulario se cierra. En ambos casos se conserva la dirección guardada. |

## HU 03 · Dar de baja una dirección de entrega

Como cliente, quiero eliminar una dirección que ya no uso para mantener actualizado mi listado.

| Dado | Cuando | Entonces |
| --- | --- | --- |
| Tengo una dirección guardada | Pulso **Eliminar** en su fila | Se abre una confirmación que identifica la dirección por su alias. |
| Estoy en la confirmación | Pulso **Cancelar** o la cruz | La dirección permanece en el listado. |
| Estoy en la confirmación | Pulso **Eliminar** | La dirección se quita del listado y sigue eliminada al recargar. |
