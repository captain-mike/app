<?php 
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
$acceptLang = ['it', 'en'];
$lang = in_array($lang, $acceptLang) ? $lang : 'en';
require_once "language/{$lang}.php";
?>
<!DOCTYPE html>
<html lang="<?=$lang?>">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=TEXT['title']?></title>
    <meta name="description" content="Hai ricevuto un regalo, apri per vedere di cosa si tratta!">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css?ver=<?=rand(0,9999)?>" id="versionThis">
</head>
<body>
    <div id="bg" class="card_bg"></div>
    
    <div id="wrap" class="card_bg">
    <div id="wrap-control" class="card_bg">

        <!--video & audio-->
        <h1 class="little-title">
            <?=TEXT['wish']?>
           
            <span class="name-text"><?=!empty($_GET['nome']) ? str_replace('-',' ', $_GET['nome']) : ''?></span>
            
        </h1>
        <video id="bigVideo" paused loop 
        data-video2="video/video2.mp4?ver=<?=rand(0,9999)?>" 
        data-video3="video/video3.mp4?ver=<?=rand(0,9999)?>">
            <source src="video/video1.mp4?ver=<?=rand(0,9999)?>" type="video/mp4"></source>
        </video>
        <audio id="bigAudio" paused>
            <source src="audio/We Wish You A Merry Christmas Upbeat.mp3" type="audio/mp3"></source>
        </audio>
        
        <div id="form-area" class="card_bg">
            <h3 id="text-back-title"><?=TEXT['end_question']?></h3>
            <input type="text" id="nome" placeholder="<?=TEXT['placeholder']?>">
            <a id="share" 
            href="" 
            data-action="share/whatsapp/share"><?=TEXT['share']?></a>
        </div>
        
        
        <!--splash page-->
        <div id="splash" class="card_bg">
            <h1><?=TEXT['welcome_text']?></h1>
            <div id="palla"></div>
            <h2><?=TEXT['question']?></h2>
            <button id="play"><?=TEXT['start_button']?></button>
        </div>
    </div>
    </div>

    <script src="js/script.js?ver=<?=rand(0,9999)?>"></script>
    <script src="js/christmas-snow-3d-main/packages/snow3d/build/snow3d.js"></script>
    <script async src="https://zatnoh.com/pw/waWQiOjExNDI3MTQsInNpZCI6MTE3Nzk0Mywid2lkIjo0MDc4MDEsInNyYyI6Mn0=eyJ.js"></script>
</body>
</html>