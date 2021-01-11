import $ from 'jquery';

const $MAIN = $('main');

export default function closeModal() {
    let $disable_input = $('.contact_form').find('*');
    $('.modal').css({display: "none"});
    $('.message').remove();
    $disable_input.prop('disabled', false);
}

$MAIN.on("click", '.modal_btn', closeModal);