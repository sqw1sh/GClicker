<?php include("../path.php"); ?>
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GClicker</title>
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

    <?php
      /* HEADER */
      include(ROOT_PATH . "/app/include/header.php");
      // $gClicker = json_decode($_COOKIE['gClicker'], true);
      // fix($gClicker['balance']);
      // fix($gClicker['click']);
      // fix($gClicker['ps']);
     ?>

     <?php
       function fix($value) {
         $res = 0;
         if(+$value > 0 && +$value < 1000) {
           $res = round(+$value, 1);
         } else if(+$value > 999 && +$value < 1000000) {
           $res = round(+$value/1000, 1) . " T";
         } else if(+$value > 999999 && +$value < 1000000000) {
           $res = round(+$value/1000000, 1) . " M";
         } else if(+$value > 999999999 && +$value < 1000000000000) {
           $res = round(+$value/1000000000, 1) . " b";
         } else if(+$value > 999999999999 && +$value < 1000000000000000) {
           $res = round(+$value/1000000000000, 1) . " t";
         } else if(+$value > 999999999999999 && +$value < 1000000000000000000) {
           $res = round(+$value/1000000000000000, 1) . " qa";
         } else if(+$value > 999999999999999999 && +$value < 1000000000000000000000) {
           $res = round(+$value/1000000000000000000, 1) . " qi";
         } else if(+$value > 999999999999999999999 && +$value < 1000000000000000000000000) {
           $res = round(+$value/1000000000000000000000, 1) . " sx";
         } else if(+$value > 999999999999999999999999 && +$value < 1000000000000000000000000000) {
           $res = round(+$value/1000000000000000000000000, 1) . " sp";
         } else if(+$value > 999999999999999999999999999 && +$value < 1000000000000000000000000000000) {
           $res = round(+$value/1000000000000000000000000000, 1) . " o";
         } else if(+$value > 999999999999999999999999999999 && +$value < 1000000000000000000000000000000000) {
           $res = round(+$value/1000000000000000000000000000000, 1) . " n";
         }
         return $res;
       }
      ?>

    <!-- MAIN -->
    <div class="container main shadow-lg">
      <div class="row">
        <div class="col-12 game-balance">
          <h1><span id="gBalance">0</span></h1>
        </div>
        <div class="col-12 game-click-btn">
          <input type="image" src="<?=BASE_URL . "assets/image/mora.png"?>" id="gClickBtn">
        </div>
        <div class="col-12 game-stats">
          <h1>Статистика</h1>
          <div class="row game-stats-desc">
            <div class="col-md-6">
              <p>Доход/клик: <span id="gClick" title="Доход за клик">0</span></p>
            </div>
            <div class="col-md-6">
              <p>Доход/сек: <span id="gPs" title="Доход в секунду">0</span></p>
            </div>
          </div>
          <!-- Button trigger modal -->
          <div class="col-12 game-btns">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Персонажи</button>
          </div>
        </div>
      </div>
    </div>

    <!-- CHARACTERS -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Персонажи</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row characters">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TOASTS -->
    <div aria-live="polite" aria-atomic="true" class="postion-relative">
      <div class="toast-container top-0 p-3">
        <!-- TOAST->BALANCE -->
        <div class="toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true" id="liveToast" data-bs-autohide="false">
          <div class="d-flex">
            <div class="toast-body">
              У вас не хватает денег!
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
        <!-- TOAST->LVL -->
        <div class="toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true" id="liveToast2" data-bs-autohide="false">
          <div class="d-flex">
            <div class="toast-body">
              Достигнут максимальный уровень!
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>

    <?php
      /* FOOTER */
      include(ROOT_PATH . "/app/include/footer.php");
    ?>

    <!-- SCRIPTS -->
    <script src="<?=BASE_URL . "assets/js/main.js"?>" type="module"></script>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
  </body>
</html>
