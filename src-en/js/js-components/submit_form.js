import $ from 'jquery';
import { showModal } from './show_modal';

const $SUBMIT = $('main');

export function sentData(e) {
    e.preventDefault();
    var data = $('.contact_form').serialize();
    const $FNAME = $('#fname').val();
    let $email_one = $('#email').val();
    let $email_two = $('#confirm_email').val();
    let $msg = $('#message').val();
    let $reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;

    if ($reg.test($email_two) && $email_one === $email_two) {
        if ($msg !== '') {
                $.post('./php/action_page.php', data)
                .done(function() {
                    showModal(`${$FNAME}, <br/> form was submited successfuly. <br/><br/>
                                We will contact you within 24 h. <br/><br/>
                                Thank you!`)})
                .fail(function(){
                    showModal(`${$FNAME}, <br/> something went wrong. <br/><br/>
                                Try again or write directly: <br/>
                                info@starcab.wroclaw.pl`)})
                $('#fname').val('');
                $('#email').val('');
                $('#confirm_email').val('');
                $('#message').val('');
                return;
        }
        else {
            return showModal(`The message field is empty!`);
        }
    }
    else {
        return showModal(`Provided e-mail adress is incorrect! <br /> <br />
                            Try again.`);
    }
};

$SUBMIT.submit(sentData);

