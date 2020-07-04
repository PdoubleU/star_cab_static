import $ from "jquery";

var $main = $('main');

export const hideAlert = () => {
    $(".name").css({ visibility: 'hidden'});
    $(".email").css({ visibility: 'hidden'});
    $(".msg").css({ visibility: 'hidden'});
};

$main.on("focusin", 'input', hideAlert);
$main.on("focusin", 'textarea', hideAlert);