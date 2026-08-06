# Coral Data Lab — sistema editorial por capítulos

## Idea estructural

La web no se organiza como una sucesión de header, hero, tarjetas y footer. Se presenta como un cuaderno editorial dividido en dos planos:

- **Plano de tesis (39 %):** identidad, posicionamiento y utilidades persistentes.
- **Plano de capítulos (61 %):** contenido que avanza mediante paneles de proporción cercana al cuadrado.

En escritorio el plano de tesis permanece fijo mientras los capítulos se desplazan. En móvil ambos planos se apilan y conservan el mismo orden narrativo.

## Jerarquía de contenido

1. **Productos:** únicos capítulos numerados. NeuralGraph, Mostra y Talos ocupan una escena completa cada uno.
2. **Contenido editorial:** principios, método y futuras notas aparecen sin competir con la numeración de producto.
3. **Conversión:** “Hablemos” es una acción horizontal persistente; nunca se presenta como un capítulo.
4. **Utilidades:** idioma, privacidad, localización y metadatos usan tipografía monoespaciada y bajo contraste.

## Composición

- Proporción de escritorio: `39 / 61`.
- Cada capítulo principal usa `min-height: 100svh` para aproximarse a un lienzo cuadrado dentro del plano derecho.
- Las divisiones se construyen con filetes de 1 px. No se usan sombras.
- El contenido se alinea a los bordes de la retícula; no se encierra en tarjetas flotantes.
- Los elementos repetidos usan cuadrados o celdas, no cápsulas ni tarjetas redondeadas.

## Tipografía

- **Fraunces:** títulos principales y frases editoriales.
- **Inter:** texto, navegación y títulos funcionales.
- **JetBrains Mono:** índices, estados, idiomas y metadatos.
- Solo pesos 400 y 500.
- Los títulos pueden ser muy grandes; el texto corrido mantiene una medida máxima de 68 caracteres.

## Color

- Fondo principal: papel `#FBFAF7` y blanco.
- Plano de tesis: cálido `#F3EFE8`.
- Coral `#D8432B`: marca, acción primaria y señalización; nunca domina grandes superficies.
- Fondo profundo `#0E1A1F`: una única escena de contraste por recorrido.
- Los bordes usan neutros claros. No se añaden sombras.

## Patrones de página

### Portada

Tesis persistente a la izquierda. La primera pantalla del plano derecho es un índice editorial neutral: presenta el sistema completo sin preseleccionar ningún producto e invita a elegir uno de los tres capítulos. Solo después comienzan NeuralGraph, Mostra y Talos como escenas detalladas. Principios y método continúan como contenido editorial sin numeración. Contacto cierra el recorrido, pero no forma parte del índice de productos.

### Producto

La página de producto puede resolverse como una única composición sin scroll: identidad, estado, CTA e idiomas en el plano izquierdo; problema, propuesta del producto y futura evidencia cuantitativa en el plano derecho. El mensaje debe pertenecer al producto concreto, nunca repetir la tesis corporativa de Coral Data Lab.

### Artículo o nota futura

Título, fecha, tema y vínculo con el producto en el plano fijo. El artículo ocupa el plano derecho. El índice de notas será cronológico y tipográfico, sin cuadrícula de tarjetas ni imágenes obligatorias.

### Página institucional o legal

Título y utilidades en el plano fijo. El contenido se divide en secciones lineales numeradas únicamente para facilitar la lectura, no como capítulos de producto.

## Responsive

- Por debajo de 820 px los dos planos se apilan.
- El plano de tesis deja de ser fijo.
- Los capítulos reducen su altura mínima y las cuadrículas pasan a una columna.
- “Hablemos” permanece horizontal y visible.
- La jerarquía y el orden del contenido no cambian entre escritorio y móvil.

## Movimiento

La estructura debe funcionar sin animación. Si se añaden transiciones, solo acompañarán el cambio de capítulo y respetarán `prefers-reduced-motion`.
