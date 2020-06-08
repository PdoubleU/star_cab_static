import $ from 'jquery';
import { showModal } from './show_modal';

const $SUBMIT = $('main');

export function sentData(e) {
    e.preventDefault();
    var data = $('.contact_form').serialize();
    const $FNAME = $('#fname').val();
    let $email_one = $('#email').val();
    let $email_two = $('#confirm_email').val();
    let $reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    if ($reg.test($email_two) && $email_one === $email_two) {
            $.post('./php/action_page.php', data)
            .done(function() {
                showModal(`${$FNAME}, <br/> formularz został wysłany. <br/><br/>
                            Skontaktujemy się z tobą  w ciągu 24 godzin. <br/><br/>
                            Dziękujęmy!`) })
            .fail(function(){
                showModal(`${$FNAME}, <br/> coś poszło nie tak. <br/><br/>
                            Spróbuj ponownie lub napisz bezpośrednio na nasz adres email: <br/>
                            info@starcab.wroclaw.pl`)})
            $('#fname').val('');
            $('#email').val('');
            $('#confirm_email').val('');
            $('#message').val('');
            return;
    }
    else {
        return showModal(`Podany adres e-mail jest nieprawidłowy! <br /> <br />
                            Spróbuj jeszcze raz`);
    }
};

$SUBMIT.submit(sentData);

