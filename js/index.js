window.addEventListener('load', init, false);

const video = document.querySelector('#video');
let videoStream;

function init() {
    // if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    try {
        initiateVideo();
    } catch (e) {
        console.error(e);
        alert("L'application a besoin de la caméra pour fonctionner");
        return;
    }
    // }
}

function initiateVideo() {
    let p = navigator.mediaDevices.getUserMedia({ video: true });
    p.then((stream) => {
        console.log("ok");
        video.srcObject = stream;
    }).catch(console.log);
}