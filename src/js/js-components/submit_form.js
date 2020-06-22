import $ from 'jquery';
import { showModal } from './show_modal';

const $SUBMIT = $('main');

export function sentData(e) {
    e.preventDefault();
    var data = $('.contact_form').serialize();
    const $FNAME = $('#fname').val();
    const $EMAIL_ONE = $('#email').val();
    const $EMAIL_TWO = $('#confirm_email').val();
    const $MSG = $('#message').val();
    const $REG = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;

    if ($FNAME === '') {
        $('#fname').css({'border-color': 'red', 'border-width': '2px'});
        return;
    }
    else if ($MSG === '') {
        $('#message').css({'border-color': 'red', 'border-width': '2px'});
        return;
    }
    else if ($EMAIL_ONE !== $EMAIL_TWO || $EMAIL_ONE === '') {
        $('#email').css({'border-color': 'red', 'border-width': '2px'});
        $('#confirm_email').css({'border-color': 'red', 'border-width': '2px'});
        return;
    }
    else if ($REG.test($EMAIL_TWO)) {
        $.post('./php/action_page.php', data)
        .done(function() {
            showModal(`${$FNAME}, <br/> formularz został wysłany. <br/><br/>
                Skontaktujemy się z tobą  w ciągu 24 godzin. <br/><br/>
                Dziękujęmy!`);
                $FNAME = '';
                $EMAIL_ONE = '';
                $EMAIL_TWO = '';
                $MSG = '';})
        .fail(function(){
            showModal(`${$FNAME}, <br/> coś poszło nie tak. <br/><br/>
                Spróbuj ponownie lub napisz bezpośrednio na nasz adres email: <br/>
                info@starcab.wroclaw.pl`)})
            return;
    }
};

$SUBMIT.submit(sentData);