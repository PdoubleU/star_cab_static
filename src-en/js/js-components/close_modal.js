import $ from 'jquery';

var $main = $('main');

export const closeModal = () => {
    let $disable_input = $('.contact_form').find('*');
    $('.modal').css({display: "none"});
    $('.message').remove();
    $disable_input.prop('disabled', false);
}

$main.on("click", '.modal_btn', closeModal);