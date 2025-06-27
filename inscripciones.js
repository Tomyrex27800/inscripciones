function mostrarFormulario() {
const form = document.getElementById('formulario-charla');
const btn = document.querySelector('.toggle-btn');

if (form.style.display === 'none') {
    form.style.display = 'block';
    btn.textContent = 'Ocultar formulario';
} else {
    form.style.display = 'none';
    btn.textContent = 'Inscribirme a la charla';
}
}