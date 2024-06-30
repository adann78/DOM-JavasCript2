
const captureButton = document.getElementById('captureButton');
const video = document.getElementById('webcam');
export default function takePhoto(id,id2) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Error al acceder a la cámara: ', error);
    });


    // Crear un lienzo en el que se dibujará el fotograma del video
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');

    // Dibujar el fotograma actual del video en el lienzo
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convertir la imagen del lienzo a formato base64
    const dataURL = canvas.toDataURL('image/png');

    // Guardar la imagen en localStorage
    localStorage.setItem('foto', dataURL);
}