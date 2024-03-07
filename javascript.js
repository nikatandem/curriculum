function mostrarSeccion(id) {
    // Oculta todas las secciones
    let secciones = document.querySelectorAll('section');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Muestra la sección con el ID dado
    let seccionAMostrar = document.getElementById(id);
    seccionAMostrar.style.display = 'block';
}
window.onload = function() {
    mostrarSeccion('SobreMi');
};

function imprimir() {
     let secciones = document.querySelectorAll('section')
     secciones.forEach(seccion=> seccion.style.display='block')

    window.print();
  }