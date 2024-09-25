window.addEventListener('load', function() {
  console.log('Todos los elementos de la página han sido completamente cargados.');
  // Aquí puedes ejecutar tu lógica

  
 window.sr = ScrollReveal();

  sr.reveal('.text-center')
 
  
  sr.reveal('.serviceTitle');
  sr.reveal('.serviceItem', {
    duration: 1000,
    origin:'top',
    distance: '100px',
    reset: true,
    });
  sr.reveal('.projectsTitle', {
      duration: 2000,
      origin:'top',
      distance: '100px',
      reset: true,
  });
  sr.reveal('.projectFigure');

  sr.reveal('.stack', {
      duration: 2500,
      origin:'left',
      distance: '150px'
  });
  sr.reveal('.about', {
      duration: 2500,
      origin:'right',
      distance: '150px',
      reset: true
  });

  sr.reveal('.ContactData', {
      duration: 2200,
      origin:'top',
      distance: '150px',
      reset: true
  });
  sr.reveal('.contact-form', {
      duration: 2200,
      origin:'bottom',
      distance: '150px',
      reset: true
  });

});
