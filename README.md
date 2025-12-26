# 📱 PROYECTO SPRINGFIELD APP | EXAMEN FINAL

## 📌 Descripción del Proyecto
**Springfield App** es una solución móvil profesional para la gestión de tareas (Todo List), desarrollada con **React Native**, **Expo** y **TypeScript**. El proyecto integra una arquitectura robusta 100% conectada a un **Backend REST** , con autenticación JWT, persistencia de sesión y gestión de archivos multimedia en la nube.

---

## ⚙️ Requisitos Técnicos Implementados

### 1. Gestión de Tareas (CRUD 100% Backend) 🌐
Se ha eliminado toda persistencia local de tareas, cumpliendo con la restricción de que toda la data debe provenir exclusivamente del backend:
* **Listado:** Obtención de tareas en tiempo real mediante `GET /todos`.
* **Creación:** Registro de nuevas tareas (título, ubicación y foto) con `POST /todos`.
* **Actualización:** Modificación de títulos y estados (pendiente/completado) mediante `PUT` y `PATCH`.
* **Eliminación:** Borrado de registros y sus imágenes asociadas mediante `DELETE`.

### 2. Autenticación y Seguridad 🔐
* **Token JWT:** Implementación de flujo de inicio de sesión con persistencia obligatoria del token en `AsyncStorage`.
* **Protección de Rutas:** Gestión de navegación protegida; las rutas privadas solo son accesibles con un token válido.
* **Interceptores de API:** Configuración de Axios para adjuntar automáticamente el token `Bearer` en las cabeceras de autorización.

### 3. Integración de APIs Nativas e Imágenes 📸
* **Captura:** Uso de la API nativa de cámara para la captura de fotos.
* **Cloud Storage:** Subida de archivos binarios al servidor mediante el endpoint `POST /images` utilizando `multipart/form-data`.
* **Geolocalización:** Captura de coordenadas GPS (latitud y longitud) al momento de crear cada tarea.

### 4. Arquitectura y Custom Hooks 🏗️
Toda la lógica de negocio ha sido encapsulada en **Custom Hooks** para desacoplar las vistas de la lógica de procesamiento:
* **`useTodos`:** Hook principal que gestiona la obtención, creación, edición y borrado de tareas, además de controlar los estados de carga (`loading`) y errores.

---

## 🤖 Uso de Herramientas de Inteligencia Artificial (Obligatorio)
En cumplimiento con la rúbrica, se declara el uso de herramientas de **IA** como asistente para:
1.  **Refactorización Arquitectónica:** Migración de lógica de contextos hacia Hooks personalizados.
2.  **Gestión de Red:** Solución de errores de red en Android y manejo de interceptores para el token JWT.
3.  **Configuración de Entorno:** Implementación de variables de entorno mediante archivos `.env`.

---

## 🚀 Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone 
    cd eva-libreria
    ```

2.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz con la URL obligatoria del backend:
    ```env
    EXPO_PUBLIC_API_URL=[https://todo-list.dobleb.cl](https://todo-list.dobleb.cl)
    ```

3.  **Instalar dependencias e iniciar:**
    ```bash
    npm install
    npx expo start --clear
    ```

---

## 👥 Integrantes y Roles
* **Eduardo Hormazabal A.:** Lógica de Hooks, Integración de API y CRUD.
* **Jesus Mujica M.:** Interfaz de Usuario (UI), Navegación y Perfil.
* **Maria Puen C.:** Gestión de Imágenes (R2), Cámara y Localización.

## 🔗 Enlaces de Entrega

| Detalle | Enlace |
| :--- | :--- |
| **Repositorio GitHub** | https://github.com/Roottok/examenexpo |
| **Video Demostrativo** | [Insertar Enlace Aquí] |

---