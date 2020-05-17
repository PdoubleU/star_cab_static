import $ from "jquery";
export var $top_nav = $('.top-nav a');
export const changeContent = (e) => {
    e.preventDefault();
    $('#content').load("about_us.html #column");
  };

$top_nav.click(changeContent);