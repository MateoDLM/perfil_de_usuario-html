# Portafolio Personal y Proyectos Web - Mateo De Luca

Bienvenido al repositorio de mi página web personal. Este proyecto fue desarrollado como parte de la cátedra de **Desarrollo de Software 2025** en la **UTN Facultad Regional Mendoza (FRM)**.

El sitio actúa como una carta de presentación profesional e integra una colección de aplicaciones web interactivas que demuestran el dominio de tecnologías Frontend.

## 🚀 Descripción General

El proyecto consta de una **Landing Page** principal que utiliza HTML semántico y CSS moderno para presentar información personal, académica y de contacto. Desde allí, se navega hacia tres micro-proyectos que exhiben lógica de programación avanzada en JavaScript.

### Tecnologías Principales
* **HTML5:** Estructura semántica y accesible.
* **CSS3:** Diseño responsivo, Flexbox, Grid, animaciones (`@keyframes`) y variables.
* **JavaScript (ES6+):** Lógica del DOM, asincronismo y consumo de APIs.
* **Git/GitHub:** Control de versiones.

---

## 📂 Estructura del Proyecto

### 1. Página Principal (`index.html`)
Un perfil de usuario completo que incluye:
* **Header:** Presentación con foto de perfil y efectos visuales.
* **Sobre Mí:** Información académica y enlaces a redes (LinkedIn, GitHub).
* **Formulario de Contacto:** Integrado con `FormSubmit` para envío de correos y validación de campos.
* **Diseño:** Uso de gradientes y sombras (`box-shadow`) para una interfaz moderna.

### 2. Proyectos Destacados

El portafolio incluye tres aplicaciones web funcionales alojadas en la carpeta `/proyectos`:

#### A. Calculadora Interactiva 🧮
* **Ruta:** `proyectos/calculadora/`
* **Descripción:** Una calculadora totalmente funcional capaz de realizar operaciones matemáticas básicas (+, −, ×, ÷).
* **Características Técnicas:**
    * Manipulación del DOM para capturar eventos de click.
    * Manejo de errores (ej. división por cero).
    * Lógica de estado para almacenar valores y operadores.

#### B. Galería de Personajes (The Simpsons API) 🍩
* **Ruta:** `proyectos/galeriaPersonajes/`
* **Descripción:** Aplicación que consume una API externa para mostrar tarjetas de personajes aleatorios.
* **Características Técnicas:**
    * Uso de **Asincronismo (Async/Await)**.
    * Implementación de `Promise.all()` para realizar múltiples peticiones simultáneas y optimizar la carga.
    * Loader CSS personalizado durante la espera de datos.
    * Renderizado dinámico de tarjetas con imagen, nombre, ocupación e ID.

#### C. Tienda Online (FakeStore API) 🛍️
* **Ruta:** `proyectos/tiendaOnline/`
* **Descripción:** Un e-commerce simulado que lista productos y permite ver sus detalles.
* **Características Técnicas:**
    * Consumo de la **FakeStore API**.
    * **Buscador en tiempo real:** Filtrado de productos mediante el método `.filter()` en arrays.
    * **Persistencia de datos:** Uso de `localStorage` para pasar información del producto seleccionado entre la página de listado (`products.html`) y la de detalles (`productDetails.html`).
    * Navegación dinámica mediante parámetros URL.

---

## 🛠️ Instalación y Uso

Este es un proyecto de sitio estático, por lo que no requiere instalación de dependencias de backend.

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/MateoDLM/perfil_de_usuario.git](https://github.com/MateoDLM/perfil_de_usuario.git)
    ```
2.  **Ejecutar:**
    * Navega a la carpeta del proyecto.
    * Abre el archivo `index.html` en tu navegador web de preferencia.
    * *Recomendación:* Utilizar la extensión "Live Server" de VS Code para una mejor experiencia de desarrollo.

---

## ✒️ Autor

**Mateo De Luca**
* Estudiante de Ingeniería en Sistemas - UTN FRM
* [LinkedIn](https://www.linkedin.com/in/mateodeluca)
* [GitHub](https://github.com/MateoDLM)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
