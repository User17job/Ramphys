document.addEventListener('DOMContentLoaded', function() {
    
    function showPDetails(value) {
        // Convert the value to an integer (if necessary)
        let parametro = parseInt(value);
    
        // Fetch the JSON file
        fetch("projectsDetails.json")
            .then(response => response.json())
            .then(data => {
                // Access the specific project using the value as the key
                let datos = data.projects[parametro];
                if (datos) {
                    // Populate the modal content
                    document.getElementById('exampleModalLabel').innerText = datos.name; // Set project name as modal title
                    document.querySelector('.modalProjectImage').src = datos.img; // Set project image
                    document.querySelector('.text').innerText = datos.Description; // Set project description
    
                    // Clear and update the technologies stack dynamically
                    const techIconsContainer = document.querySelector('.modal-icons');
                    techIconsContainer.innerHTML = ''; // Clear previous icons

                    datos.Stack.forEach(tech => {
                        const StackIcon = document.createElement('img');
                        StackIcon.classList.add('MIcons');
                        StackIcon.src = tech.image; // Set icon source
                        // StackIcon.innerText = tech; // Assuming "Stack" contains tech names
                        techIconsContainer.appendChild(StackIcon);

                    });
    
                    // Update the project link
                    document.querySelector('.DownloadCv').onclick = function() {
                        window.location.href = datos.link; // Set the link for the project
                    };
    
                    // Show the modal
                    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
                    myModal.show();
                } else {
                    console.error("No project found with the given value");
                }
            })
            .catch(error => {
                console.error("Error loading JSON file:", error);
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

