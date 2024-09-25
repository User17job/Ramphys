document.addEventListener('DOMContentLoaded', function() {
    
function showPDetails(value) {
    let parametro = parseInt(value)

    fetch("projectsDetails.json") 
        .then(response => response.json())
        .then(data => {
            let datos = data.projects[value]
            console.log(datos)


            Swal.fire({
                title: `${datos.name}`,
                text: `${datos.Description}`,
                imageUrl: `${datos.img}`,
                imageWidth: 400,
                imageHeight: 400,
                html:`
                    <h5 class"border">Hola Mundo</h5>
                    <p>${datos.Description}</p>
                    <p>${datos.name}</p>
                    <p>${datos.link}</p>
                    <p>${datos.Stack}</p>

                `
                // imageAlt: "Custom image"
            });
        })
        .catch(error => {
            console.error("Hubo un problema al cargar el archivo JSON:", error);
        });
}


    // Seleccionar todos los elementos con la clase modalBtn
    let buttons = document.querySelectorAll('.modalBtn');
    
    // Bucle para agregar un listener a cada figcaption
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el valor por defecto desde el atributo data-default
            let defaultText = button.getAttribute('data-default');
            console.log("Default figcaption text:", defaultText);
            // alert("Figcaption text: " + defaultText); // Muestra el valor por defecto en una alerta
            showPDetails(defaultText)

        });
    });
});

