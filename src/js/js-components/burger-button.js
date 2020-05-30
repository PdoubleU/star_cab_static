import $ from "jquery";

var $menu_button = $('.menu-btn');
var $button_inner = $('.menu-btn__inner');
var $navigation = $('.top-nav');
export const handleClick = () => {
  $button_inner.toggleClass('menu-btn__inner--active');
  $navigation.toggleClass('top-nav--active');
}
$menu_button.click(handleClick);
