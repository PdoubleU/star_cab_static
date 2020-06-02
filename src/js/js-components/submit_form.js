import $ from 'jquery';
import { showModal } from './show_modal';

const $SUBMIT = $('main');

export function sentData(e) {
    e.preventDefault();
    var data = $('.contact_form').serialize();
    const $FNAME = $('#fname').val();
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
};

$SUBMIT.submit(sentData);

