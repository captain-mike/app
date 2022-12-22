<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scopri chi ti ha scritto!</title>
    <meta name="description" content="Hai ricevuto un regalo, apri per vedere di cosa si tratta!">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css?ver=<?=rand(0,9999)?>" id="versionThis">
</head>
<body>
    
    <div id="wrap">

        <!--video & audio-->
        <h1 class="little-title">
            Tanti auguri di buon natale da 
            <span class="name-text"><?=$_GET['nome'] ?? ''?></span>
        </h1>
        <video id="bigVideo" paused loop>
            <source src="video/video1.mp4" type="video/mp4"></source>
        </video>
        <audio id="bigAudio" paused>
            <source src="audio/We Wish You A Merry Christmas Upbeat.mp3" type="audio/mp3"></source>
        </audio>
        
    <div id="form-area">
        <h3 id="text-back-title">Vuoi inviare anche tu una palla di natale?</h3>
        <input type="text" id="nome" placeholder="Scrivi il tuo nome">
        <a id="share" 
        href="" 
        data-action="share/whatsapp/share">Inviala con whatsapp</a>
    </div>
    
    
    <!--splash page-->
    <div id="splash">
        <h1>Qualcuno ti ha inviato una palla di natale</h1>
        <div id="palla"></div>
        <h2>Vuoi sapere chi?</h2>
        <button id="play">Clicca qui!</button>
    </div>
    </div>

    <script src="js/script.js?ver=<?=rand(0,9999)?>"></script>
    <script src="js/christmas-snow-3d-main/packages/snow3d/build/snow3d.js"></script>
</body>
</html>