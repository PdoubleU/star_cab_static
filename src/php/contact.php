<!DOCTYPE html>
<html>
  <head>
  	<meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <span id="contact" class="column_form">

      <div id="modal" class="modal">
        <div class="modal_backdrop"></div>
        <div class="modal_body">

        <button id="close" class="modal_btn">Zamknij</button>

        </div>
      </div>

      <h2 class="contact_form_header">Skontaktuj się z nami</h2>

      <form class="contact_form" action="./php/action_page.php" method="post">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname">
        <label for="email">E-mail adress:</label>
        <input type="email" id="email" name="email">
        <label for="confirm_email">Confirm email:</label>
        <input type="email" id="confirm_email" name="confirm_email">
        <label for="message">Your message:</label>
        <textarea type="text" id="message" name="message"></textarea>
        <input type="submit" value="Wyślij" class="sub_btn" id="post-data-btn">
      </form>

    </span>
  </body>
</html>