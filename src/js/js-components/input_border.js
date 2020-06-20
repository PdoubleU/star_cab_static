import $ from "jquery";

var $main = $('main');

export default function inputBorder() {
    $(this).css({'border-color': '#262626', 'border-width': '1px'});
}

$main.on('focusin', 'input', inputBorder);