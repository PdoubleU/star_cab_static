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

        <button id="close" class="modal_btn">Close</button>

        </div>
      </div>

      <h2 class="contact_form_header">Contact with us</h2>

      <form class="contact_form" action="./php/action_page.php" method="post">
        <label for="fname">Your first name:</label>
        <input type="text" id="fname" name="fname">
        <label for="email">Your e-mail adress:</label>
        <input type="email" id="email" name="email">
        <label for="confirm_email">Confirm e-mail:</label>
        <input type="email" id="confirm_email" name="confirm_email">
        <label for="message">Ask us:</label>
        <textarea type="text" id="message" name="message"></textarea>
        <input type="submit" value="Wyślij" class="sub_btn" id="post-data-btn">
      </form>

    </span>
  </body>
</html>