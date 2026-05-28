document.addEventListener('DOMContentLoaded', () => {
    const formRegistro = document.getElementById('form-registro');
    const portalSeccion = document.getElementById('portal');
    const navPortalBtn = document.getElementById('nav-portal-btn');
    const footerPortalLink = document.getElementById('footer-portal-link');
    const btnCerrarPortal = document.getElementById('btn-cerrar-portal');

    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const tipoId = document.getElementById('tipo_identificacion').value;
            const numCedula = document.getElementById('num_cedula').value.trim();

            if (!tipoId || !numCedula || !nombre) {
                alert('ERROR TÉCNICO: Todos los campos obligatorios deben completarse.');
                return;
            }

            alert(`REGISTRO JURÍDICO EXITOSO:\nExpediente creado a nombre de: ${nombre}.\nLa documentación técnica ha sido indexada de forma segura.\nSe ha habilitado su acceso al Portal Privado.`);
            formRegistro.reset();
            mostrarPortal();
        });
    }

    if (navPortalBtn) navPortalBtn.addEventListener('click', (e) => { e.preventDefault(); mostrarPortal(); });
    if (footerPortalLink) footerPortalLink.addEventListener('click', (e) => { e.preventDefault(); mostrarPortal(); });
    if (btnCerrarPortal) btnCerrarPortal.addEventListener('click', () => { ocultarPortal(); });

    function mostrarPortal() {
        portalSeccion.classList.remove('hidden');
        portalSeccion.scrollIntoView({ behavior: 'smooth' });
    }

    function ocultarPortal() {
        portalSeccion.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        alert('Sesión segura finalizada.');
    }
});
