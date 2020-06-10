import $ from "jquery";

let $window = $(window);
let $scroll_btn = $('.scroll_btn');

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
$window.scroll(scroll);
$scroll_btn.click(scrollTop);