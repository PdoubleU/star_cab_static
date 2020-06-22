import $ from 'jquery';
import { showModal } from './show_modal';

const $SUBMIT = $('main');

export function sentData(e) {
    e.preventDefault();
    var data = $('.contact_form').serialize();
    var $fname = $('#fname').val();
    var $email_one = $('#email').val();
    var $email_two = $('#confirm_email').val();
    var $mgs = $('#message').val();
    const $REG = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;

    if ($fname === '') {
        $('#fname').css({'border-color': 'red', 'border-width': '2px'});
        return;
    }
    else if ($mgs === '') {
        $('#message').css({'border-color': 'red', 'border-width': '2px'});
        return;
    }
    else if ($email_one !== $email_two || $email_one === '') {
        $('#email').css({'border-color': 'red', 'border-width': '2px'});
        $('#confirm_email').css({'border-color': 'red', 'border-width': '2px'});
        return;
    }
    else if ($REG.test($email_two)) {
        $.post('./php/action_page.php', data)
        .done(function() {
            showModal(`${$fname}, <br/> form was submited successfuly. <br/><br/>
                        We will contact you within 24 h. <br/><br/>
                        Thank you!`);
                    $fname = '';
                    $email_one = '';
                    $email_two = '';
                    $mgs = '';})
        .fail(function(){
            showModal(`${$fname}, <br/> something went wrong. <br/><br/>
                    Try again or write directly: <br/>
                    info@starcab.wroclaw.pl`)})
            return;
    }
};

$SUBMIT.submit(sentData);