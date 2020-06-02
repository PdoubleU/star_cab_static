import $ from 'jquery';

export function showModal(msg) {
    $('.modal_body').append(`<h3 class='message'> ${msg} </h3>`);
    $('.modal').css({display: "flex"});
};