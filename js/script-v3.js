const play = document.querySelector('#play');
const video = document.querySelector('#bigVideo');
const audio = document.querySelector('#bigAudio');
const sourceMp4 = video.querySelector('#mp4');
const sourceWebm = video.querySelector('#webm');
const nomeTesto = document.querySelector('.little-title .name-text');

const vid1 = 'video/christmas.mp4';

async function load() {
    
    let [fileMp4, fileWebm] = await Promise.all([
        preloadVideo(vid1),
        preloadVideo(mp4ToWebm(vid1)),
    ])

    return {
        fileMp4: fileMp4,
        fileWebm: fileWebm,
    }
}

load()
    .then(res => {
        console.log(res)
        toggleLoading();

        play.addEventListener('click',function(){
    
            document.querySelector('#wrap').classList.remove('not_ready');
            const elem = document.documentElement;
            if (elem.requestFullscreen) {elem.requestFullscreen()}
            document.querySelector('#splash').style.display = 'none';
            nomeTesto.classList.add('activate')

            sourceMp4.setAttribute('src', res.fileMp4);
            sourceWebm.setAttribute('src', res.fileWebm);
            video.load();
            audio.play();
            video.play();
        
            setTimeout(() => {
                video.pause();
                document.querySelector('#form-area').classList.add('open')
            }, 50000)
        })

    });
    
    function toggleLoading() {
        document.querySelector('#loader').classList.toggle('hide');
    }
    async function preloadVideo(src) {
        const res = await fetch(src);
        const blob = await res.blob();
        return URL.createObjectURL(blob);
    }
    
    function mp4ToWebm(filename) {
        return filename.replace('mp4', 'webm');
    } 
    
    
    function marginAutoOnWrap() {
        let wrap = document.querySelector('#wrap');
        if (window.innerWidth > 450) {
            wrap.style.left = (window.innerWidth / 2) - (wrap.clientWidth / 2) + 'px';
        } else {
            wrap.style.left = '';
        }
    }

    
    
    window.addEventListener('resize', marginAutoOnWrap)
    window.onload = marginAutoOnWrap();

    let nome = document.querySelector('#nome');
        let share = document.querySelector('#share');
        //scrittura nome
        nome.addEventListener('keyup', function () {
            let url = location.origin + location.pathname;
            let text = share.getAttribute('data-text')
            share.href = `whatsapp://send?text=${text} ${url}?nome=${encodeURIComponent(nome.value.replaceAll(' ','-'))}`;
        })

        //tasto condividi
        share.addEventListener('click', function (e) {
            e.preventDefault();
            if (!nome.value) {
                nome.classList.add('empty');
                alert('Inserisci il tuo nome nell\'area rossa');
            } else {
                nome.classList.remove('empty');
                location.href = share.href;
            }
        })