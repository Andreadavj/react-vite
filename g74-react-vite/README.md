# proyecto-react-vite

# 🍕 Pizzería Mamma Mía - Hito 1

Proyecto realizado como parte del curso de Introducción a React de Desafío Latam.

## 📌 Descripción

Este proyecto es el primer hito de la aplicación **Pizzería Mamma Mía**, desarrollada con **React** y **Vite**. Se implementaron componentes clave como `Navbar`, `Footer`, `Home`, `Header` y `CardPizza`, cumpliendo con los requisitos del desafío propuesto.

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/) (opcional, para estilo rápido)
- HTML5 + CSS3 + JavaScript ES6

## 📁 Estructura del proyecto


src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── Header.jsx
│ ├── Home.jsx
│ └── CardPizza.jsx
│
├── assets/
│ └── img/ (imágenes de las pizzas)
│
├── App.jsx
├── main.jsx
└── App.css



## 🎯 Requisitos cumplidos

✅ Mostrar los componentes `Navbar`, `Home` y `Footer` en `App.jsx`  
✅ `Header` dentro de `Home`, con título y descripción  
✅ Menú de navegación con opciones dinámicas según `token` (login simulado)  
✅ Mostrar total de compra con separador de miles (ej. 25.000 CLP)  
✅ Botones `Home` y `Total` siempre visibles  
✅ Renderizar múltiples pizzas con `CardPizza` usando props  
✅ `Footer` con derechos reservados

## 💡 Simulación de estado

En `Navbar.jsx` se simulan las variables:

```js
const token = false; // Simula si el usuario está logueado
const total = 25000; // Simula el total del carrito

🧠 Lecciones aprendidas
Uso de props en componentes React

Estructuración modular de una SPA

Estilos con Bootstrap

Renderizado condicional en JSX

Reutilización de componentes

📸 Capturas

![Página principal](../react-vite/g74-react-vite/src/assets/img/Captura%20de%20pantalla_readme.jpeg)

📦 Instalación y ejecución
bash
Copiar
Editar
# Clonar el repositorio
git clone https://github.com/Andreadavj/react-vite.git
cd react-vite/g74-react-vite

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

## 📝 Licencia
Proyecto educativo para Desafío Latam.
Desarrollado por Doris Valverde Jara.