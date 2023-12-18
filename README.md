# PWA - Google Books Client

## Info
```
npm run dev
```

## Enunciado

### Buscador de libros
La práctica consistirá implementar la aplicación que se desarrolló en la práctica 2 de
Android, que actuaba de cliente del API de Google Books, para implementarla como una
aplicación web progresiva (PWA).

###  Tipo de aplicación
La aplicación será una página web, programada como una (PWA). Ha de poder ser
instalada en un dispositivo móvil y, opcionalmente (subirá nota), podrá funcionar sin
conexión (es decir, en modo offline). Obligatoriamente tendrá que ser usable desde un
ordenador a través de un navegador.
Tampoco es necesario que la app almacene el estado, pero subirá nota si se almacenan
datos con localStorage.

### Alojamiento
La práctica estará alojada en un servidor web haciendo uso de GitHub Pages.
Detalle de funcionalidad
La app se programará como una SPA (es decir, aplicación de una sola página) y, a
diferencia de la práctica 2, para esta práctica solamente se buscarán libros (es decir, se
elimina la parte relativa a la búsqueda de revistas).

### Implementación
La práctica se implementará con React y la librería Axios para el acceso remoto.
La página hará uso de hojas de estilo (CSS) aparte que establezcan la apariencia de la
aplicación y de sus componentes.
Todo el código de la aplicación se localizará en un repositorio público de GitHub, para
poder comprobar el código presentado y los commits llevados a cabo para su
implementación.

### Auditoría
La práctica deberá incluir una captura de pantalla de la auditoría con “Lighthouse”. Si
hay algunos criterios PWA que no se cumplen (por ejemplo, de los iconos y el color de
tema, se puede ignorar). Lo importante es que sea una PWA, y se vea en la auditoría.
