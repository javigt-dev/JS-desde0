
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then(resultado => console.log(`el permiso es ${resultado}`))
});

if(Notification.permission == 'granted'){
    new Notification('Esta es una Notificacion', {
        icon: 'imgs/notificacion.jpeg',
        body: 'Codigo con Javier, el leon del Orgullo'
    })
}