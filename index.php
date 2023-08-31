<?php include("path.php"); ?>
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GClicker | Загрузка...</title>
    <link rel="icon" href="<?=BASE_URL . "assets/image/favicon.ico"?>" type="image/x-icon">
    <!-- STYLES -->
    <link rel='stylesheet' href='<?=BASE_URL . "assets/css/bootstrap.min.css"?>'>
    <link rel='stylesheet' href='<?=BASE_URL . "assets/css/style.css"?>'>
    <!-- ICONS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>

    <div class="container load">
      <a href="<?=BASE_URL . "game/index.php"?>"><button type="button" class="btn btn-success" onclick="loadGame(this)">Загрузить игру</button></a>
    </div>

    <!-- SCRIPTS -->
    <script src="<?=BASE_URL . "assets/js/load.js"?>" type="module"></script>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
  </body>
</html>