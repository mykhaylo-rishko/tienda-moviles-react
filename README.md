Tienda de Móviles - Prueba Front-end
Esta es una mini-aplicación de comercio electrónico para comprar dispositivos móviles, desarrollada como parte de una prueba técnica de front-end. La aplicación es una 

Single Page Application (SPA)  construida con 

React y Vite, y se centra en ofrecer una experiencia de usuario fluida y un código limpio y mantenible.

✨ Características Principales
Dos Vistas Principales:

Una página de listado de productos (PLP) con todos los artículos disponibles.

Una página de detalles del producto (PDP) con especificaciones completas y acciones de compra.


Búsqueda en Tiempo Real: La página de listado incluye un filtro que permite buscar productos por marca y modelo al instante.


Enrutado del Lado del Cliente: Navegación fluida entre vistas sin recargar la página, gestionada con react-router-dom.


Gestión de Estado Global: El contador del carrito de la compra se gestiona de forma global con la Context API de React y persiste entre sesiones usando localStorage.


Caché de Datos Eficiente: Todas las llamadas a la API se cachean en el cliente durante 1 hora para minimizar las peticiones de red y mejorar el rendimiento.



Diseño Adaptativo (Responsive): La interfaz se adapta a diferentes tamaños de pantalla, mostrando hasta cuatro productos por fila en resoluciones grandes.

🛠️ Tecnologías Utilizadas
React 18

Vite como herramienta de construcción y servidor de desarrollo.


JavaScript (ES6) 

React Router para el enrutado de la aplicación.


ESLint para el análisis estático del código.


Vitest y React Testing Library para la configuración de pruebas unitarias.

CSS plano para los estilos.

🚀 Cómo Empezar
Sigue estos pasos para clonar, instalar y ejecutar el proyecto en tu máquina local.

Requisitos Previos
Node.js (versión 18 o superior)

npm o yarn

Instalación y Ejecución
Clona el repositorio:

Bash

git clone https://github.com/mykhaylo-rishko/tienda-moviles-react.git
cd tu-repositorio
Instala las dependencias del proyecto:

Bash

npm install
Ejecuta el modo de desarrollo:
Este comando inicia la aplicación en modo de desarrollo con Hot-Reload.

Bash

npm run start
La aplicación estará disponible en http://localhost:5173 (o el puerto que indique la terminal).

Scripts Disponibles
Este proyecto incluye los siguientes scripts, tal como se requería:


npm run start: Inicia la aplicación en modo desarrollo.


npm run build: Compila la aplicación para producción en la carpeta dist.


npm run test: Ejecuta los tests unitarios con Vitest.


npm run lint: Analiza el código en busca de errores y problemas de estilo.

🔌 API
La aplicación consume una API externa para obtener todos los datos de los productos y gestionar el carrito.


URL Base: https://itx-frontend-test.onrender.com/ 

Endpoints:


GET /api/product: Obtiene la lista de todos los productos.


GET /api/product/:id: Obtiene los detalles de un producto específico.


POST /api/cart: Añade un producto al carrito.

📁 Estructura del Proyecto
El código fuente está organizado en la carpeta src con la siguiente estructura:

src
├── components/   # Componentes reutilizables (Header, ProductCard, etc.)
├── context/      # Contexto de React para estado global (ej. CartContext)
├── hooks/        # Hooks personalizados (ej. useFetchWithCache)
├── pages/        # Componentes que representan una página/vista completa
├── utils/        # Funciones de utilidad (ej. cache.js)
├── assets/       # Archivos estáticos como imágenes o fuentes
├── App.jsx       # Componente raíz y layout principal
├── main.jsx      # Punto de entrada de la aplicación y configuración de rutas
└── index.css     # Estilos globales