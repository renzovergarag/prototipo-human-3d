# Prototipo 3D — Cuerpo humano

Pequeño proyecto React + Vite que muestra un modelo 3D (.glb) usando el web component `@google/model-viewer`. Incluye hotspots interactivos y un modal informativo para partes del modelo.

## Estructura relevante

-   src/App.jsx — Componente principal que renderiza `<model-viewer>` y los hotspots.
-   src/assets/modelo.glb — Modelo 3D cargado por defecto.
-   index.html — Carga global del script de `model-viewer` desde unpkg.

## Uso (macOS)

1. Instalar dependencias:
    - npm install
2. Levantar servidor de desarrollo:
    - npm run dev
3. Generar build de producción:
    - npm run build
4. Previsualizar build:
    - npm run preview

El dev server sirve los activos desde `/src/assets`, por eso App.jsx usa `src="/src/assets/modelo.glb"`.

## Notas

-   Para reemplazar el modelo 3D, sustituye `src/assets/modelo.glb`.
-   Los hotspots y la lógica del modal están en `src/App.jsx` (ajusta posiciones con `data-position`).
-   `model-viewer` se añade en `index.html`; no requiere instalación adicional en el bundle.

## Contribuciones

Abrir un PR o issue con cambios o mejoras
