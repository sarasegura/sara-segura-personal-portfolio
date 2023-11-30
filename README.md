# [Mi Portafolio 💼](https://sarasegura.github.io/sara-segura-personal-portfolio/)

## Tecnologías Utilizadas

- [React](https://reactjs.org/): Biblioteca de JavaScript para construir interfaces de usuario.
- [Vite](https://vitejs.dev/): Herramienta de construcción rápida para aplicaciones web modernas.
- [react-spring](https://react-spring.io/): Biblioteca para animaciones en React.
- [react-router-dom](https://reactrouter.com/): Enrutador para aplicaciones React.

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado antes de seguir estos pasos.

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/tu-proyecto.git
cd tu-proyecto

2. Instala las dependencias:

npm install


```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### npm run dev

Ejecuta la aplicación en modo de desarrollo. Abre http://localhost:3000 para verla en el navegador.

La página se recargará si realizas modificaciones. También verás cualquier error lint en la consola.

### npm run build

Construye la aplicación para producción en la carpeta dist. Optimiza el código para obtener el mejor rendimiento.

## Instalación de vite + React y React Router DOM un proyecto desde inicio

1. Instalar Vite:
   Abre tu terminal y ejecuta el siguiente comando para instalar Vite globalmente:

```bash
npm create vite@latest name-proyect
# Pasos 1
o puedes poner  ./  ➡️ "comentario: esto es si ya lo tienes en github."
# Pasos 2
template react
```

2. Luego de esto, vamos a introducir el siguiente comando para instalar React Router DOM.

```bash
# Instalar React DOM  versión actual
npm install --save react-router-dom

# Instalar React DOM 6
npm install --save react-router-dom@6
```

3. Luego como es Vite vamos a introducir el comando:

### npm run dev

Ejecutara la aplicación en modo de desarrollo. Abre http://localhost:3000 para verla en el navegador.

## Pasos para hacer el deploy en Github

1. En la terminal verificar si en modo de producción funciona la app:

```bash
npm run build
```

Se va a generar una carpeta llamada dist, para visualizar la app se corre:

```bash
npm run preview
```

Se abre el navegador y debe salir.

2. En la terminal ejecutar:

```bash
npm install gh-pages --save-dev
```

3. Abrimos el archivo package.json, antes del cierre de la última llave, se
   agrega:

```bash
"homepage": "https://nombre_usuario.github.io/nombre_repositorio/"
```

4. En la parte de los scripts se agrega "deploy": "gh-pages -d dist" queda así:

```bash
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },

```

5. Abrimos el archivo vite.congig.js y agregamos base: "./", el código queda:

```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "./",
})

```

6. Guardamos los cambios, y en la terminal ejecutamos:

```bash
npm run deploy
```

Si sale Published es que todo salió bien.

7. Vamos al repositorio en GitHub. En la página de GitHub, al recargarla, en la lista desplegable
   de las ramas deben salir al menos las ramas main y gh-pages.

al abrir la pestaña de “Settings”, luego en el apartado izquierdo en la pestaña de “Pages”, en las
opciones de “Branch” ya la herramienta que instalamos de gh-pages seleccionó por la opción de la rama gh-pages y la carpeta raíz: /root.

Después de unos minutos debe aparecer la dirección del despliegue. 🎇🎆

## Autor

Sara Paola Segura Devia- Front-end Developer.
