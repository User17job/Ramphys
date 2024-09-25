setTimeout(() => {
    // Mostrar el contenido principal y habilitar el scroll
    document.querySelector('#container').style.display = "block";
    document.querySelector('body').style.overflow = "scroll";
    document.querySelector('#container').classList.add('charge');
    
    // Agregar la clase de desvanecimiento
    const chargingElement = document.querySelector('.charging');
    chargingElement.classList.add('fade-out');
    
    // Esperar a que termine la animación de desvanecimiento antes de ocultar el elemento
    setTimeout(() => {
        chargingElement.style.display = "none"; // Ocultar el elemento
    }, 1000); // 1 segundo para coincidir con la duración de la transición

}, 5000); // 5 segundos antes de iniciar el proceso
