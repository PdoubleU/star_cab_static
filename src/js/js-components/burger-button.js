import $ from "jquery";

const $MENU_BTN = $('.menu-btn');
const $BTN_INNER = $('.menu-btn__inner');
const $NAV = $('.top-nav');

export function handleClick() {
  $BTN_INNER.toggleClass('menu-btn__inner--active');
  $NAV.toggleClass('top-nav--active');
}

$MENU_BTN.on('click', handleClick);