import $ from "jquery";
export var $menu_button = $('.menu-btn');
export var $button_inner = $('.menu-btn__inner');
export var $navigation = $('.top-nav');
export const handleClick = () => {
  $button_inner.toggleClass('menu-btn__inner--active');
  $navigation.toggleClass('top-nav--active');
}
$menu_button.click(handleClick);
