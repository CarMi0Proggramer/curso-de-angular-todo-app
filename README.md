# Todo App - Curso de Angular Desde Cero

Este proyecto es el resultado de un curso en mi canal de YouTube, donde te guiaré paso a paso desde cero en la creación de una app con Angular, utilizando conceptos fundamentales y algunas herramientas adicionales como `json-server` para simular una API.

## Enlaces del Curso

Puedes encontrar el curso completo de la creación de esta app en el siguiente [playlist de YouTube](https://youtube.com/playlist?list=PLo3vs-YIusZq96SEcAqxLHhcNTvmPFZAx&si=OFQfvNuZojTvujNc).

## Descripción del Proyecto

Esta es una aplicación de lista de tareas simple donde puedes agregar, eliminar y marcar tareas como completadas. La app utiliza Angular y se comunica con una API falsa proporcionada por `json-server` para simular un backend.

## Funcionalidades

- Agregar tareas a la lista.
- Eliminar tareas.
- Marcar tareas como completadas.

## Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu máquina:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [Angular CLI](https://angular.io/cli) (se puede instalar con `npm install -g @angular/cli`)

## Guía de Instalación

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/CarMi0Proggramer/curso-de-angular-todo-app.git
cd curso-de-angular-todo-app
```

### Paso 2: Instala las dependencias

```bash
npm install
```

### Paso 3: Levanta la API falsa con json-server

```bash
npm run api
```

### Paso 4: Levanta el servidor de desarrollo con el Angular CLI

```bash
ng serve
```
