import $ from "jquery";
import { showModal } from './show_modal';

var $main = $('main');

export default function checkEmail() {
    let $email_one = $('#email').val();
    let $email_two = $('#confirm_email').val();
    let $reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    if ($email_one === $email_two && $reg.test($email_two)) {
        return true;
    }
    else {
        return showModal(`Podane adresy e-mail nie zgadzają się! <br /> <br />
                            Sprawdź poprawność obu pól z adresem e-mail oraz zweryfikuj czy e-mail jest prawidłowy.`);
    }
}

$main.on('focusout', '#confirm_email', checkEmail);

