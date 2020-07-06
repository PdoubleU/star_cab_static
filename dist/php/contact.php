<!DOCTYPE html>
<html>
<head>
    <title>Star Cab</title>
    <meta name="description" content="Strona wizytówka firmy świadczącej usługi transportowe i przewozowe na terenie miasta Wrocław oraz w Polsce">
    <meta name="keywords" content="transport osobowy, pasażerski, transport na terenie miasta Wrocław, transport krajowy w Polsce, transport hotelowy, usługi transportu i przewozu">
    <meta name="author" content="Piotr Witasik">
    <meta charset="UTF-8" content="text/html" lang="pl">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./images/favicon.ico">
</head>
<body>
    <nav class="nav-container">
        <div class="nav-container__inner">
            <p class="nav-header">Star Cab Wrocław</p>
            <ul class="top-nav">
                <li><a class="home" href="./php/home.php">Strona główna</a></li>
                <li><a class="about_us" href="./php/about_us.php">O nas</a></li>
                <li><a class="tourist_services" href="./php/tourist_services.php">Turystyka</a></li>
                <li><a class="contact" href="./php/contact.php">Kontakt</a></li>
            </ul>
            <button class="menu-btn" aria-label="open menu">
                <span class="menu-btn__box">
                    <span class="menu-btn__inner"></span>
                </span>
            </button>
        </div>
    </nav>

    <div id="switch_lang" class="switch_lang">
        <div class="switch_lang--pl" aria-label="polish language">
            <a href="./" lang="pl" hreflang="pl">PL</a>
        </div>
        <div class="switch_lang--en" aria-label="english language">
            <a href="/en/" lang="en" hreflang="en">EN</a>
        </div>
    </div>

    <header>
        <div class="background-img">
            <div class="motto">
                <h2 class="motto_header">Gdziekolwiek chcesz jechać</h2>
                <img class="logo" src="./images/logo.svg" alt="logo firmy">
            </div>
        </div>
    </header>

    <main id="content">

      <article id="contact" class="column_form">

        <div id="modal" class="modal" aria-label="form submit result">
          <div class="modal_backdrop"></div>
          <div class="modal_body">

          <button id="close" class="modal_btn" aria-label="close modal window">Zamknij</button>

          </div>
        </div>

        <h2 class="contact_form_header">Skontaktuj się z nami</h2>

        <form class="contact_form" action="./php/action_page.php" method="post">
        <div class="contact_form--element">
          <label for="fname">Podaj swoje imię:</label>
            <input type="text" id="fname" name="fname">
            <div class="name" aria-label="enter first name">Wprowadź imię</div>
        </div>
        <div class="contact_form--element">
          <label for="email">Twój adres e-mail:</label>
            <input type="email" id="email" name="email">
            <div class="email" aria-label="incorrect email">Błąd w adresie email</div>
        </div>
        <div class="contact_form--element">
          <label for="confirm_email">Powtórz e-mail:</label>
            <input type="email" id="confirm_email" name="confirm_email">
            <div class="email" aria-label="incorrect email">Błąd w adresie email</div>
        </div>
        <div class="contact_form--element">
          <label for="message">Zadań pytanie:</label>
            <textarea type="text" id="message" name="message"></textarea>
            <div class="msg" aria-label="enter message">Uzupełnij to pole</div>
        </div>
            <input type="submit" value="Wyślij" class="sub_btn" id="post-data-btn">
        </form>

      </article>

    </main>

        <button class="scroll_btn" aria-label="scroll up button">
            <img src="./images/chevron-up.svg" alt="^">
        </button>

    <footer class="footer">
        <div class="footer-content">
            <article class="footer-art">
                <h4>Adres</h4>
                    Star Cab <br>
                    Klaudia Dawidzińska <br>
                    ul. Polna 28A <br>
                    52-116 Iwiny <br>
                    NIP: 751 10 74 693 <br>
                </p>
            </article>
            <article class="footer-art">
                <h4>Dane kontaktowe</h4>
                <br>
                    Telefon: +48 605 434 141 <br> <br>
                    E-mail: info@starcab.wroclaw.pl <br>
                </p>
            </article>
        </div>
        <div class="signature">
            <p>Website author: Piotr Witasik / PdoubleU &#169; 2020</p>
        </div>
    </footer>

</body>
</html>