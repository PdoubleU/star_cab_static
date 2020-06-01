import $ from 'jquery';
import { showModal } from './show_modal';

const $SUBMIT = $('main');

export function sentData(e) {
    e.preventDefault();
    var data = $('.contact_form').serialize();
    $.post('./php/action_page.php', data, showModal(e));
    $('#fname').val('');
    $('#email').val('');
    $('#confirm_email').val('');
    $('#message').val('');
};

$SUBMIT.submit(sentData);

