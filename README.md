# In Process

# Ramphys Tirana Brito

Este es mi portafolio donde podras conocer un poco mas de mi y mi forma de trabajo,
tambien te invito a tomar en cuenta mi blog presentado en el sitio web.

# Portafolio

# Acerca de mí

# Contact

# Servicio

# Blog

# Mi Marca personal

Brief:

# Formulario de Servicios Web

Este proyecto es una aplicación web que permite a los usuarios seleccionar uno o más servicios de un conjunto de opciones a través de un formulario interactivo. Los servicios disponibles incluyen diseño y desarrollo web, estilización web y creación de marca. Además, el formulario se adapta dinámicamente a las opciones seleccionadas y permite modificar la selección de servicios después de la confirmación inicial.

Además, los datos del formulario se guardan en una hoja de Google Sheets, y se automatiza el envío de esos datos al correo electrónico del usuario que requirió el servicio.

## Características

- **Selección de servicios**: Los usuarios pueden elegir entre varios servicios disponibles.
- **Interactividad**: Usa `SweetAlert2` para mostrar un cuadro de diálogo interactivo al cargar la página, donde se pueden seleccionar uno o más servicios.
- **Formulario dinámico**: Dependiendo de los servicios seleccionados, se muestran diferentes secciones del formulario para que el usuario complete información adicional.
- **Integración con Google Sheets**: Los datos del formulario se guardan automáticamente en una hoja de Google Sheets.
- **Automatización de correo**: Una vez que los datos son guardados en Google Sheets, una automatización envía los datos al correo electrónico del usuario que solicitó el servicio.
- **Botón para cambiar selección**: Los usuarios pueden cambiar su selección de servicios en cualquier momento haciendo clic en un botón.

## Tecnologías Usadas

- **HTML**: Estructura básica de la página web.
- **CSS**: Estilos para el diseño de la interfaz de usuario, incluyendo la visualización de las secciones del formulario.
- **JavaScript**: Lógica interactiva para gestionar la selección de servicios, la actualización del formulario y la validación de las entradas.
- **SweetAlert2**: Biblioteca para mostrar cuadros de diálogo interactivos y atractivos.
- **Google Sheets API**: Para integrar Google Sheets con el formulario y almacenar los datos.
- **Automatización de Google Apps Script**: Para enviar los datos del formulario por correo electrónico automáticamente al usuario.

## Instalación

### Requisitos Previos

1. Una cuenta de Google para utilizar Google Sheets y Google Apps Script.
2. Un proyecto de Google Cloud configurado para acceder a la API de Google Sheets.
3. Un script de Google Apps para automatizar el envío de correos electrónicos.

### Paso 1: Configuración de Google Sheets

1. Crea una hoja de Google Sheets que tenga columnas para almacenar los datos que el formulario recoge (nombre, correo electrónico, servicios seleccionados, etc.).
2. Obtén las credenciales de la API de Google Sheets desde la [Google Cloud Console](https://console.cloud.google.com/).
3. Configura la integración entre el formulario y Google Sheets utilizando la API de Google Sheets.

### Paso 2: Configuración del Script de Google Apps

1. Abre el Google Sheets donde se guardarán los datos.
2. Ve a `Extensiones > Apps Script` y crea un nuevo script.
3. Escribe un script que se active cuando se agreguen nuevos datos a la hoja y automatice el envío de un correo electrónico con los datos a la dirección proporcionada en el formulario.

### Paso 3: Clonar el Proyecto

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tuusuario/nombre-del-repositorio.git
   ```
