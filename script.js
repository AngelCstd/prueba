document.getElementById('eventForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        codigo_postal: document.getElementById('codigo_postal').value,
        ciudad: document.getElementById('ciudad').value,
        anuncio: document.getElementById('anuncio').value,
        objetivo: document.getElementById('objetivo').value,
        dia: document.getElementById('dia').value
    };

    console.log(formData)

    const statusDiv = document.getElementById('status');
    statusDiv.textContent = 'Enviando...';

    /*try {
        const response = await fetch('https://miurl.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            statusDiv.textContent = 'Formulario enviado con éxito.';
        } else {
            statusDiv.textContent = 'Error al enviar el formulario. Inténtalo nuevamente.';
        }
    } catch (error) {
        statusDiv.textContent = 'Error al enviar el formulario. Revisa tu conexión.';
    }*/
});
