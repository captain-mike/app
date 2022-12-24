    const play = document.querySelector('#play');
    const video = document.querySelector('#bigVideo');
    const audio = document.querySelector('#bigAudio');
    const sourceMp4 = video.querySelector('#mp4');
    const sourceWebm = video.querySelector('#webm');
    const sourceOgg = video.querySelector('#ogg');
    const nomeTesto = document.querySelector('.little-title .name-text');

    const vid1 = 'video/video1.mp4';
    const vid2 = video.getAttribute('data-video2');
    const vid3 = video.getAttribute('data-video3')


    async function load() {
        
        let [file1Mp4, file2Mp4, file3Mp4, file1Webm, file2Webm, file3Webm] = await Promise.all([
            preloadVideo(vid1),
            preloadVideo(vid2),
            preloadVideo(vid3),
            preloadVideo(mp4ToWebm(vid1)),
            preloadVideo(mp4ToWebm(vid2)),
            preloadVideo(mp4ToWebm(vid3)),
        ])

        return {
            file1Mp4: file1Mp4,
            file2Mp4: file2Mp4,
            file3Mp4: file3Mp4,
            file1Webm: file1Webm,
            file2Webm: file2Webm,
            file3Webm: file3Webm
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

                sourceMp4.setAttribute('src', res.file1Mp4);
                sourceWebm.setAttribute('src', res.file1Webm);
                audio.play();
                video.play();
                setTimeout(() => {
                    sourceMp4.setAttribute('src', res.file2Mp4);
                    sourceWebm.setAttribute('src', res.file2Webm);
                    video.load()
                    video.play()
                    video.playbackRate = 1.30;
                }, 14000)
                
                setTimeout(() => {
                    sourceMp4.setAttribute('src', res.file3Mp4);
                    sourceWebm.setAttribute('src', res.file3Webm);
                    video.load()
                    video.play()
                    video.playbackRate = 1.30;
                }, 35000)
                
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
        function mp4ToOgg(filename) {
            return filename.replace('mp4', 'Ogg');
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
                share.href = `whatsapp://send?text=Scopri chi ti ha inviato una palla di natale ${url}?nome=${encodeURIComponent(nome.value.replaceAll(' ','-'))}`;
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