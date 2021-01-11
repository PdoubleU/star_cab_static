import $ from "jquery";

const $MAIN = $('main');

export const hideAlert = () => {
    $(".name").css({ visibility: 'hidden'});
    $(".email").css({ visibility: 'hidden'});
    $(".msg").css({ visibility: 'hidden'});
};

$MAIN.on("focusin", 'input', hideAlert);
$MAIN.on("focusin", 'textarea', hideAlert);

