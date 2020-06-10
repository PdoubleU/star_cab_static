import $ from 'jquery';



export function showModal(msg) {
    let $disable_input = $('.contact_form').find('*');
    $('.modal_body').append(`<h3 class='message'> ${msg} </h3>`);
    $('.modal').css({display: "flex"});
    $disable_input.prop('disabled', true);
};