// share.js
function Share(description) {
    const url = window.location.href;

    function ShareWebAPI() {
        if (navigator.share) {
            navigator.share({
                title: description,
                url: url,
                images: [
                    {
                        url: 'https://example.com/your-image-url.jpg', // Asegúrate de reemplazar esto con la URL de tu imagen
                        alt: description,
                    },
                ],
            })
             .catch(err => alert("Error Sharing: " + err))
        } else {
            alert("La función de compartir no está disponible en este navegador.");
        }
    }

    ShareWebAPI();
}

// Llama a la función Share con el título que deseas compartir
Share('Título del contenido que deseas compartir');