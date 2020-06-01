import $ from 'jquery';

var $main = $('main');

export function closeModal(){
    $('.modal').css({display: "none"});
}

$main.on("click", '.modal_btn', closeModal);