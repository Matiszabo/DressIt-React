let filtros = {}; // Objeto para almacenar los filtros

function alternarSeccion(sectionId) {
    const section = document.getElementById(sectionId);
    const arrow = document.getElementById(sectionId.replace('section', 'arrow'));
    if (section.style.display === 'none') {
        section.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        section.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}

function limpiarFiltros() {
    const checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    
    // Limpiar filtros en el objeto
    filtros = {};
}

function agregarFiltro(opcion, valor) {
    filtros[opcion] = valor; 
    console.log(filtros); // Mostrar objeto en consola (para verificar)
}

// Asignar números a las opciones seleccionadas y recopilar en un objeto JSON
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            const opcion = checkbox.parentElement.textContent.trim(); // Obtener texto de la etiqueta
            agregarFiltro(opcion, index); 
        });
    });
});
