const play = document.querySelector('#play');
const video = document.querySelector('#bigVideo');
const audio = document.querySelector('#bigAudio');
const source = video.querySelector('source');

const file1 = 'video/video1.mp4';
const file2 = 'video/video2.mp4';
const file3 = 'video/video3.mp4';


play.addEventListener('click',function(){

    document.querySelector('#splash').style.display = 'none';
    document.querySelector('.little-title .name-text').classList.add('activate')
    audio.play();
    video.play();
    setTimeout(() => {
        source.setAttribute('src', file2);
        video.load()
        video.play()
        video.playbackRate = 1.30;
        video.style.transform = 'rotateY(180deg)';
    }, 14000)
    
    setTimeout(() => {
        source.setAttribute('src', file3);
        video.load()
        video.play()
        video.playbackRate = 1.30;
        video.style.transform = 'rotateY(180deg)';
    }, 35000)
    
    setTimeout(() => {
        video.pause();
        document.querySelector('#form-area').classList.add('open')
    }, 50000)
})

let nome = document.querySelector('#nome');
let share = document.querySelector('#share');

nome.addEventListener('keyup',function(){
    let url = location.origin +  location.pathname;
    share.href = `whatsapp://send?text=Scopri chi ti ha inviato una palla di natale ${url}/?nome=${nome.value}`;
})