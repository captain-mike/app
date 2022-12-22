const play = document.querySelector('#play');
const video = document.querySelector('#bigVideo');
const audio = document.querySelector('#bigAudio');
const source = video.querySelector('source');
const nomeTesto = document.querySelector('.little-title .name-text');

const file1 = 'video/video1.mp4';
const file2 = video.getAttribute('data-video2');
const file3 = video.getAttribute('data-video3');


play.addEventListener('click',function(){

    const elem = document.documentElement;
    if (elem.requestFullscreen) {elem.requestFullscreen()}
    document.querySelector('#splash').style.display = 'none';
    nomeTesto.classList.add('activate')
    audio.play();
    video.play();
    setTimeout(() => {
        source.setAttribute('src', file2);
        video.load()
        video.play()
        video.playbackRate = 1.30;
    }, 14000)
    
    setTimeout(() => {
        source.setAttribute('src', file3);
        video.load()
        video.play()
        video.playbackRate = 1.30;
    }, 35000)
    
    setTimeout(() => {
        video.pause();
        document.querySelector('#form-area').classList.add('open')
    }, 50000)
})

let nome = document.querySelector('#nome');
let share = document.querySelector('#share');
//scrittura nome
nome.addEventListener('keyup',function(){
    let url = location.origin +  location.pathname;
    share.href = `whatsapp://send?text=Scopri chi ti ha inviato una palla di natale ${url}?nome=${nome.value}`;
})

//tasto condividi
share.addEventListener('click',function(e){
    e.preventDefault();
    if(!nome.value){
        nome.classList.add('empty');
        alert('Inserisci il tuo nome nell\'area rossa');
    }else{
        nome.classList.remove('empty');
        location.href = share.href;
    }
})
