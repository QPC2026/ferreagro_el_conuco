# 🌾 Ferreagro El Conuco

Aplicación web progresiva (PWA) para la venta de alimentos para animales al mayor y al detal.

## 📱 Características

- 🛒 **Tienda online** con catálogo de productos
- 💳 **Pago Móvil** integrado (Bancrecer)
- 🚚 **Despacho gratis** en municipio García (condiciones aplican)
- 👑 **Programa de afiliados** con acumulación de puntos
- 🔐 **Panel de administración** completo
- 📊 **Libro de compras, ventas y balance** de ganancias/pérdidas
- 💾 **Funciona offline** como app nativa (PWA)

## 🚀 Cómo usar en GitHub Pages

### 1. Crear repositorio en GitHub
- Ve a [github.com](https://github.com) y crea un nuevo repositorio público
- Nombre sugerido: `ferreagro-el-conuco`

### 2. Subir archivos
Sube todos estos archivos y carpetas al repositorio:

```
ferreagro-el-conuco/
├── index.html
├── manifest.json
├── sw.js
├── css/
│   └── style.css
├── js/
│   └── app.js
└── img/
    ├── logo.png              (tu logo)
    ├── pollito-iniciador.jpg
    ├── pollo-engorde.jpg
    ├── gallina-ponedora.jpg
    ├── cerdo-crecimiento.jpg
    ├── perro-economico.jpg
    ├── gato-economico.jpg
    ├── maiz-partido.jpg
    ├── sal-roja.jpg
    ├── concentrado-cerdo.jpg
    ├── melaza.jpg
    ├── nepe-polar.jpg
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
```

### 3. Activar GitHub Pages
1. En tu repositorio, ve a **Settings** → **Pages**
2. En "Source", selecciona **Deploy from a branch**
3. Selecciona la rama `main` y carpeta `/ (root)`
4. Guarda. Tu app estará en: `https://tunombre.github.io/ferreagro-el-conuco`

## 🖼️ Imágenes de productos

Las fotos de los productos van en la carpeta `img/`. El nombre del archivo debe coincidir con el campo `image` en el código:

| Producto | Archivo esperado |
|----------|-----------------|
| Pollito Iniciador | `img/pollito-iniciador.jpg` |
| Pollo Engorde | `img/pollo-engorde.jpg` |
| Gallina Ponedora | `img/gallina-ponedora.jpg` |
| Cerdo Crecimiento | `img/cerdo-crecimiento.jpg` |
| Perro Económico | `img/perro-economico.jpg` |
| Gato Económico | `img/gato-economico.jpg` |
| Maíz Partido | `img/maiz-partido.jpg` |
| Sal Roja | `img/sal-roja.jpg` |
| Concentrado Cerdo | `img/concentrado-cerdo.jpg` |
| Melaza | `img/melaza.jpg` |
| Nepe Polar | `img/nepe-polar.jpg` |

> 💡 **Tip:** Si no tienes foto de un producto, la app muestra automáticamente un emoji como respaldo.

## 🔐 Acceso Administrador

- **Contraseña:** `PrismaCore2026`
- Desde el panel puedes gestionar inventario, ventas, compras, clientes, promociones y ver el balance financiero.

## 🛠️ Tecnologías

- HTML5 + Tailwind CSS
- Vanilla JavaScript (ES6+)
- LocalStorage para persistencia de datos
- Service Worker para funcionamiento offline
- GitHub Pages para hosting gratuito

---

**© 2026 Ferreagro El Conuco**
