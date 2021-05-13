<!DOCTYPE html>
<html>
<head>
    <title>Star Cab</title>
    <meta name="description" content="Transport company website presenting transport services in Wroclaw">
    <meta name="keywords" content="shuttle service, transport service, shuttle in Wroclaw, hotel shuttle, city shuttle">
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
                <li><a class="home" href="./php/home.php" target="_self">Home</a></li>
                <li><a class="about_us" href="./php/about_us.php" target="_self">About Us</a></li>
                <li><a class="tourist_services" href="./php/tourist_services.php" target="_self">Tourist Services</a></li>
                <li><a class="contact" href="./php/contact.php" target="_self">Contact</a></li>
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
            <a href="../" lang="pl" hreflang="pl" target="_self">PL</a>
        </div>
        <div class="switch_lang--en" aria-label="english language">
            <a href="/en/" lang="en" hreflang="en" target="_self">EN</a>
        </div>
    </div>

    <header>
        <div class="background-img">
            <div class="motto">
                <h2 class="motto_header">Wherever you need to go</h2>
                <img class="logo" src="./images/logo.svg" alt="company's logo">
            </div>
        </div>
    </header>

    <main id="content">

        <article id="about_us" class="column">
            <h2>Quick contact:</h2>
                <p>
                Do You need a service now? Just call: +48 605 434 141.
                We might be busy at the moment, thus call back as soon as we get a breath. Contact form guarantee response within 24h.
                </p>
        </article>
        <article id="about_us"  class="column">
            <h2>Our location:</h2>
                <p>
                We operate in Wrocław, Lower Silesia, and this is our headquarter.
                If You need to be picked up in another city in Poland, it's not an issue.
                </p>
        </article>
        <article id="about_us"  class="column">
            <h2>Foregin languages:</h2>
                <p>
                Is Your customer a foreginer? No worries, our drivers speak german and english.
                </p>
        </article>

    </main>

        <button class="scroll_btn" aria-label="scroll up button">
            <img src="./images/chevron-up.svg" alt='^'>
        </button>

    <footer class="footer">
        <div class="footer-content">
            <article class="footer-art">
                <h4>Adress</h4>
                    Star Cab <br>
                    Klaudia Dawidzińska <br>
                    ul. Polna 28A <br>
                    52-116 Iwiny <br>
                    NIP: 751 10 74 693 <br>
                </p>
            </article>
            <article class="footer-art">
                <h4>Contact</h4>
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