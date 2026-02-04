# Guía para Activar GitHub Pages

## 📋 Pasos para Activar GitHub Pages en tu Repositorio

Sigue estos pasos para activar GitHub Pages y ver tu portafolio en vivo:

### 1. Acceder a la Configuración del Repositorio

1. Ve a tu repositorio en GitHub: `https://github.com/Yuletzif18/Plantillas-para-Inmobiliarias`
2. Haz clic en la pestaña **"Settings"** (Configuración)

### 2. Navegar a la Sección de Pages

1. En el menú lateral izquierdo, busca la sección **"Code and automation"**
2. Haz clic en **"Pages"**

### 3. Configurar la Fuente de GitHub Pages

En la sección **"Build and deployment"**:

1. **Source (Fuente)**: Selecciona **"GitHub Actions"**
   - Esto permitirá que el workflow automático despliegue tu sitio

### 4. Guardar Configuración

Una vez que hayas seleccionado "GitHub Actions" como fuente, GitHub Pages estará activado.

### 5. Ejecutar el Deployment

Tienes dos opciones para ejecutar el primer deployment:

#### Opción A: Merge del Pull Request (Recomendado)
1. Haz merge de este Pull Request a la rama `main`
2. El workflow se ejecutará automáticamente
3. Espera unos minutos para que se complete el deployment

#### Opción B: Ejecutar Manualmente
1. Ve a la pestaña **"Actions"** en tu repositorio
2. Selecciona el workflow **"Deploy to GitHub Pages"**
3. Haz clic en **"Run workflow"**
4. Selecciona la rama `main`
5. Haz clic en **"Run workflow"** para iniciar el deployment

### 6. Verificar el Deployment

1. Una vez completado, ve a **Settings > Pages**
2. Verás un mensaje: **"Your site is live at `https://yuletzif18.github.io/Plantillas-para-Inmobiliarias/`"**
3. Haz clic en el enlace para ver tu portafolio en vivo

## 🎉 ¡Listo!

Tu portafolio de plantillas inmobiliarias ahora está disponible públicamente en:
**https://yuletzif18.github.io/Plantillas-para-Inmobiliarias/**

## 🔄 Actualizaciones Automáticas

Cada vez que hagas cambios al archivo `index.html` y los subas a la rama `main`, GitHub Pages se actualizará automáticamente gracias al workflow configurado.

## 📝 Notas Importantes

- El dominio de GitHub Pages será: `https://<tu-usuario>.github.io/<nombre-repositorio>/`
- En este caso: `https://yuletzif18.github.io/Plantillas-para-Inmobiliarias/`
- Las plantillas individuales (Dreamwell, Luminor, etc.) seguirán desplegadas en Vercel como se muestra en el README
- GitHub Pages solo despliega la página principal del portafolio que enlaza a todas las demos

## ❓ Problemas Comunes

### El sitio no se despliega
- Verifica que hayas seleccionado "GitHub Actions" como fuente en Settings > Pages
- Asegúrate de que el workflow se haya ejecutado correctamente en la pestaña Actions
- Revisa los logs del workflow para ver si hay errores

### Error 404
- Espera unos minutos después del primer deployment
- GitHub Pages puede tardar hasta 10 minutos en activarse la primera vez

### Cambios no se reflejan
- Verifica que el workflow se haya ejecutado después de hacer push
- Limpia el caché de tu navegador
- Espera unos minutos, los cambios pueden tardar en propagarse

## 🛠️ Personalización

Puedes personalizar la página principal editando el archivo `index.html` en la raíz del repositorio. Después de hacer cambios y subirlos a `main`, el sitio se actualizará automáticamente.

---

**¿Necesitas ayuda?** Abre un issue en el repositorio o consulta la [documentación oficial de GitHub Pages](https://docs.github.com/es/pages).
