import $ from "jquery";

var $main = $('main');

export default function changeBorder() {
    $(this).css({'border-color': '#262626', 'border-width': '1px'});
}

$main.on("focusin", 'input', changeBorder);
$main.on("focusin", 'textarea', changeBorder);