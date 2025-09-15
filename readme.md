# Ejercicio: Landing Page "The BridgeFlix"

El negocio del streaming a la carta no para de crecer y nuestro equipo ha recibido el encargo de preparar la maqueta de la landing principal: el escaparate donde se mostrarán los estrenos más potentes de la cartelera.

Para ello, el departamento de diseño nos ha compartido un pantallazo con las directrices visuales que debemos seguir. Ahora toca transformar esas ideas en una experiencia que enganche desde el primer vistazo.

# Vista previa
![Vista previa de la landing](assets/landing.png)

# Colores
- background: #000000;
- primary: #e50914;
- secondary: #171717;
- text: #fff;
- link-hover: #fff;
- brightness: #0000009e;
- scrollbar: #888;

# Tipografía
Usaremos la tipografía `lato` con los siguientes pesos:
- font-light: 300;
- font-normal: 400;
- font-bold: 900;

Podremos sacar la tipografía directamente desde Google Fonts e importarla en nuestras CSS

## Objetivo
Crear una página de aterrizaje tipo "Netflix" donde:
- Practicaremos la estructura con etiquetas semánticas en HTML.
- Aplicaremos estilos modernos con CSS.
- Usaremos JavaScript para generar contenido dinámico y filtrar películas.

---

## Pasos a seguir

### 1. Estructura básica del proyecto
- Crear la carpeta del proyecto y los archivos principales: `index.html`, `css/styles.css`, `js/script.js`, `js/pelis.js` y una carpeta `assets` para imágenes.

### 2. Maquetación HTML semántica
- Definir la estructura principal usando etiquetas semánticas: `<header>`, `<main>`, `<section>`, `<article>`.
- Crear secciones para cada categoría de películas con sus correspondientes encabezados (`<h2>` para cada género).
- Añadir listas (`<ul>`) para mostrar las películas de cada género.

### 3. Estilos con CSS
- Resetear los estilos por defecto del navegador.
- Definir variables CSS para colores y fuentes.
- Estilizar la cabecera, el logo, la navegación y el fondo principal.
- Dar formato a las secciones de categorías y a las tarjetas de películas.
- Hacer la página responsive usando media queries si fuera necesario.
- Personalizar la barra de scroll para las listas de películas.

### 4. Añadir contenido dinámico con JavaScript
- Crear un array de objetos con la información de las películas en `js/pelis.js`.
- Usar JavaScript para recorrer el array y generar dinámicamente el HTML de cada película en su categoría.
- Añadir los títulos de las películas como `<h3>` dentro de cada tarjeta.
- (Opcional) Añadir filtros por género o búsqueda.

### 5. Revisión y pruebas
- Probar la navegación por anclas y el scroll suave.
- Revisar el comportamiento responsive en diferentes tamaños de pantalla.
- Comprobar que el contenido se genera correctamente y que la estructura es semántica.

---
## HELP
En la carpeta assets/`help` hay un archivo txt con cosas interesantes que puedes usar.
___

# Glosario de términos

- **HTML:** Lenguaje de marcado que se utiliza para estructurar el contenido de las páginas web.
- **CSS:** Lenguaje de estilos que permite definir la apariencia visual de los elementos HTML (colores, tamaños, posiciones, etc.).
- **JS:** Abreviatura de JavaScript, lenguaje de programación que permite dotar de dinamismo e interactividad a las páginas web.
- **Etiquetas semánticas:** Elementos HTML que describen el significado del contenido que envuelven (por ejemplo, `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Variable:** Espacio en memoria donde se almacena un valor que puede cambiar durante la ejecución de un programa.
- **Array:** Estructura de datos que permite almacenar una colección ordenada de valores (elementos), accesibles por su posición (índice).
- **Objeto:** Estructura de datos que agrupa información (propiedades) y funcionalidades (métodos) bajo un mismo nombre.
- **Método:** Función asociada a un objeto, que define un comportamiento o acción que ese objeto puede realizar.
- **Bucle:** Estructura de control que permite repetir un bloque de código varias veces, mientras se cumpla una condición.
