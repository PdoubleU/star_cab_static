import $ from "jquery";

const $MAIN = $('main');

export default function changeBorder() {
    $(this).css({'border-color': '#262626', 'border-width': '1px'});
}

$MAIN.on('focusin', 'input', changeBorder);
$MAIN.on('focusin', 'textarea', changeBorder);