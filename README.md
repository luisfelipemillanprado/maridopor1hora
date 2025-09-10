Este repositorio contiene una aplicación web creada con Next.js (app router) y configurada para TypeScript y Tailwind CSS.

## Inicio rápido

Requisitos: Node.js 18+ y un gestor de paquetes (npm, pnpm o yarn).

Instala dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre http://localhost:3000 en tu navegador para ver la aplicación en ejecución.

## Qué puedes editar

- La entrada principal está en `src/app/page.tsx` (página raíz).
- Componentes y características viven en `src/common` y `src/features`.
- Activos públicos (imágenes, fuentes, vídeos) están en `public/`.
- Configuraciones importantes: `next.config.ts`, `tailwind.config.js`, `tsconfig.json` y `server.ts`.

## Scripts útiles

- `npm run dev` — inicia el servidor de desarrollo (hot-reload).
- `npm run build` — crea la versión de producción.
- `npm run start` — arranca la app en modo producción (después de `build`).
- `npm run lint` — corre ESLint (si está configurado).

## Estructura relevante del proyecto

- `app/` (Next.js app router) — rutas y layout.
- `src/` — código fuente (componentes, hooks, utilidades y estilos).
- `public/` — assets estáticos (imágenes, fuentes, vídeos).
- `server.ts` — archivo de servidor personalizado (si estás usando configuración personalizada).

## Despliegue

La forma más directa de desplegar esta app es con Vercel. También funciona en otras plataformas que soporten Node.js.

Pasos básicos para Vercel:

1. Conecta el repositorio en https://vercel.com.
2. Asegúrate de que la versión de Node es >=18 en la configuración del proyecto.
3. Vercel detectará Next.js y configurará los comandos de build automáticamente (`npm run build` / `npm run start`).

## Contribuir

Si quieres ayudar o proponer cambios:

1. Crea un fork y una rama nueva para tu feature/fix.
2. Asegúrate de seguir las reglas de lint y formato del proyecto.
3. Envía un pull request con una descripción clara del cambio.

## Licencia

Consulta el archivo `LICENSE` para ver la licencia del proyecto.

---
