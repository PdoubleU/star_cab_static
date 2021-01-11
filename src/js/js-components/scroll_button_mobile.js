import $ from "jquery";

const $WINDOW = $(window);
const $SCRL_BTN = $('.scroll_btn');

export function scrollTop(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
};

export function scroll() {
    if ($window.scrollTop() > 300)
    {
        $scroll_btn.addClass('scroll_btn--active');
    }
    else
    {
        $scroll_btn.removeClass('scroll_btn--active');
    }
};

$WINDOW.on('scroll', scroll);
$SCRL_BTN.on('scroll', scrollTop);