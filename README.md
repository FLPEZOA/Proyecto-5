# Buscador de Libros

Esta aplicación es un buscador de libros que utiliza la API de Google Books para mostrar una lista de libros en función de la búsqueda del usuario. La aplicación está construida utilizando **React** y **Vite** para proporcionar un entorno de desarrollo rápido y eficiente. Además, se implementa **React Bootstrap** para un diseño responsivo y componentes estilizados.

## Características

- Busca libros por título o autor.
- Muestra una lista de libros con detalles como título, autor y imagen.
- Los resultados están organizados de manera responsiva en un diseño de cuadrícula.
- Los libros se abren en Google Books en una nueva pestaña.

## Tecnologías Utilizadas

# Prerrequisitos o Dependencias
Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

-**Sistema Operativo**:Windows 10/11; macOS 10.14 o superior; Ubuntu 18.04 o superior en el caso de Linux.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo que proporciona un entorno de construcción ultrarrápido.
- **React Bootstrap**: Integración de Bootstrap con React para un diseño estilizado.
- **API de Google Books**: API pública para obtener datos sobre libros.


# Instalación del Proyecto
Paso 1: Instalar Node.js
Descarga el instalador:

Ve a nodejs.org.
Descarga la versión LTS (Long Term Support).
Instala Node.js:

Sigue el asistente de instalación. Asegúrate de marcar la opción para agregar Node.js a tu PATH.
Verificar la instalación:

Abre tu terminal y ejecuta:
bash

node -v
npm -v
Deberías ver las versiones de Node.js y npm instaladas.
Paso 2: Crear un Nuevo Proyecto con Vite
Abre la terminal:

Puedes usar Command Prompt, PowerShell en Windows, Terminal en macOS o el terminal de tu elección en Linux.
Crear un nuevo proyecto:

Ejecuta el siguiente comando. Aquí, buscador-libros es el nombre de tu proyecto, pero puedes cambiarlo a lo que desees:
bash

npm create vite@latest buscador-libros --template react
Navegar al directorio del proyecto:

bash

cd buscador-libros
Paso 3: Instalar Dependencias
Instala React Bootstrap:
Ejecuta el siguiente comando para instalar React Bootstrap y Bootstrap:

bash

npm install react-bootstrap bootstrap
Instalar React Router (opcional, si necesitas enrutamiento):

bash

npm install react-router-dom
Instalar otras dependencias si es necesario (según tu requerimiento).

Paso 4: Agregar el Favicon
Crea el favicon:

Usa un generador de favicon o descarga uno.
Coloca el favicon:

Copia el archivo favicon.ico en la carpeta public de tu proyecto.
Modifica index.html:
Agrega el siguiente código en el <head> dentro de public/index.html:

html

<link rel="icon" href="%PUBLIC_URL%/favicon.ico" type="image/x-icon" />
Paso 5: Establecer el CSS
Importar Bootstrap CSS:
Abre src/main.jsx y añade la importación de Bootstrap CSS:
javascript

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Asegúrate de que tu css personalizado se aplique después
Paso 6: Ejecutar tu Aplicación
Iniciar el servidor local:

Ejecute el siguiente comando para iniciar tu aplicación:
bash

npm run dev
Abrir en el navegador:

Abre tu navegador y navega a http://localhost:5173 para ver tu aplicación en acción.
Paso 7: Estructura de Archivos
Asegúrate de que tu estructura de archivos sea algo así:

text

buscador-libros/
├─ node_modules/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
├─ src/
│  ├─ components/
│  │  ├─ BookList.jsx
│  │  ├─ SearchForm.jsx
│  ├─ hooks/
│  │  ├─ useBooks.js
│  ├─ pages/
│  │  ├─ HomePage.jsx
│  │  ├─ BookDetail.jsx
│  ├─ App.jsx
│  ├─ main.jsx
├─ index.css
├─ package.json
└─ vite.config.js


# Instrucciones para Ejecutar el Proyecto
nstrucciones para Ejecutar el Proyecto
Abre la Terminal:

Abre tu terminal o línea de comandos (Command Prompt, PowerShell en Windows, Terminal en macOS o cualquier terminal en Linux).
Navega al Directorio del Proyecto:

Usa el comando cd para cambiar al directorio de tu proyecto. Por ejemplo, si tu proyecto llamado buscador-libros está en tu escritorio, el comando sería:
bash

cd ruta/a/tu/proyecto/buscador-libros
(Reemplaza ruta/a/tu/proyecto con la ruta real donde se encuentra tu proyecto).

Iniciar el Servidor de Desarrollo:

Una vez que estés en el directorio correcto, ejecuta el siguiente comando para iniciar el servidor de desarrollo:
bash

npm run dev
Esto ejecutará el script configurado para Vite, que empieza un servidor de desarrollo local.

Ver la Aplicación en el Navegador:

Abre tu navegador web y navega a la siguiente dirección:
plaintext

http://localhost:5173
(El puerto puede variar según tu configuración o si ya tienes otro servicio en ejecución en el puerto 5173).

Verifica que la Aplicación Funcione:

Ahora deberías poder ver tu aplicación en funcionamiento. Si has configurado todo correctamente, podrás ver el buscador de libros y probar su funcionalidad de búsqueda.
Solucionar Problemas Comunes
Si algo no funciona como se espera, aquí hay algunos pasos de solución de problemas comunes:

Errores de Consola: Verifica la consola del navegador (F12 o clic derecho "Inspeccionar" -> pestaña "Consola") para ver si hay errores de JavaScript o problemas de carga de recursos.
Problemas de CORS: Si la API de Google Books no responde o muestra problemas relacionados con CORS, asegúrate de que la URL sea correcta y de que la API esté accesible.
Estado de Instalación: Si obtienes un error al ejecutar npm run dev, asegúrate de haber ejecutado npm install primero para instalar todas las dependencias necesarias.
Detener el Servidor de Desarrollo
Si deseas detener el servidor de desarrollo mientras estás en la terminal, simplemente presiona Ctrl + C.





