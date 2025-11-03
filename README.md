# 📱 PROYECTO IPSS EVALUACION 1

## Descripción General del Proyecto

Esta aplicación móvil fue desarrollada utilizando **React Native** y **Expo** con **TypeScript**, enfocándose en implementar un flujo de autenticación completo y la gestión de navegación modular mediante **Expo Router**.

El objetivo principal fue demostrar la comprensión de la gestión de estado a través de **React Hooks (`useState`, `useEffect`, `useContext`)** y la estructura de enrutamiento con Tabs, cumpliendo estrictamente con los requisitos funcionales y técnicos de la evaluación.

***

## ⚙️ Requisitos Técnicos Implementados

### 1. Manejo de Estado (React Hooks)

* **`useContext`:** Implementación de un `AuthContext` para gestionar el estado de sesión (`isAuthenticated` y `userEmail`) de forma global y centralizada.
* **`useState`:** Uso demostrado en la pantalla de Login y en la pestaña **Explore** para manejar el estado local del contador (`count`) y el interruptor de efecto (`effectTrigger`).
* **`useEffect`:** Uso demostrado en la pestaña **Explore** con dos efectos secundarios independientes:
    1.  Monitoreo del contador (`count`), disparando una acción en consola y actualizando el título de la pestaña (visible en web).
    2.  Monitoreo del estado del botón de efecto (`effectTrigger`), cambiando el color del botón y un texto descriptivo de la interfaz.

### 2. Flujo de Navegación (Expo Router)

* **Estructura de Rutas:** Se utiliza un grupo de autenticación principal en `app/_layout.tsx` para forzar la redirección al login (`/login`) si el usuario no está autenticado, evitando bucles de renderizado.
* **Vistas con Tabs (`app/(tabs)/`):** La navegación principal se implementó con **tres pestañas**:
    * **Home (`index.tsx`):** Pantalla de bienvenida.
    * **Explore (`explore.tsx`):** Demostración interactiva de los hooks `useState` y `useEffect`.
    * **Perfil (`perfil.tsx`):** Muestra el `email` del usuario logueado (acceso al Contexto).

### 3. Funcionalidad de Login

* **Validación de Contraseña:** La autenticación es exitosa solo con la contraseña `"1234"`. Cualquier otra contraseña dispara un mensaje de error.
* **Redirección:** Tras un login exitoso, el usuario es redirigido a la raíz del grupo de pestañas (`/(tabs)`).
* **Tipado:** Todo el proyecto usa **TypeScript** (`.tsx`) garantizando la seguridad de tipos.

***

## 🚀 Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone 
    cd 
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar la aplicación:**
    ```bash
    npx expo start
    ```
    Escanea el código QR desde la aplicación Expo Go para ejecutar el proyecto.

***

## 🔗 Enlaces de Entrega
GITHUB: https://github.com/Roottok/eva1desarrolloaplicaciones
VIDEO: https://www.loom.com/share/33d69f8eda31417ebc01831776187ab3 