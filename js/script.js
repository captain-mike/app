const play = document.querySelector('#play');
const video = document.querySelector('#bigVideo');
const audio = document.querySelector('#bigAudio');
const sourceMp4 = video.querySelector('#mp4');
const sourceWebm = video.querySelector('#webm');
const nomeTesto = document.querySelector('.little-title .name-text');

const file1 = 'video/video1.mp4';
const file2 = video.getAttribute('data-video2');
const file3 = video.getAttribute('data-video3');

function mp4ToWebm(filename) {
    console.log(filename.replace('mp4','webm'))
    return filename.replace('mp4','webm');
}


play.addEventListener('click',function(){

    const elem = document.documentElement;
    if (elem.requestFullscreen) {elem.requestFullscreen()}
    document.querySelector('#splash').style.display = 'none';
    nomeTesto.classList.add('activate')
    audio.play();
    video.play();
    setTimeout(() => {
        sourceMp4.setAttribute('src', file2);
        sourceWebm.setAttribute('src', mp4ToWebm(file2));
        video.load()
        video.play()
        video.playbackRate = 1.30;
    }, 14000)
    
    setTimeout(() => {
        sourceMp4.setAttribute('src', file3);
        sourceWebm.setAttribute('src', mp4ToWebm(file3));
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
    share.href = `whatsapp://send?text=Scopri chi ti ha inviato una palla di natale ${url}?nome=${encodeURIComponent(nome.value.replaceAll(' ','-'))}`;
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


window.addEventListener('resize',marginAutoOnWrap)
window.onload = marginAutoOnWrap();

function marginAutoOnWrap(){
    let wrap = document.querySelector('#wrap');
    if(window.innerWidth > 450){
        wrap.style.left = ( window.innerWidth / 2 ) - (wrap.clientWidth / 2) + 'px';
    }else{
        wrap.style.left = '';
    }
}