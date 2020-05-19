import $ from "jquery";
export var $home = $('.home');
export var $about_us = $('.about_us');
export var $tourist_services = $('.tourist_services');
export var $contact = $('.contact');

export function changeContent(e){
    e.preventDefault();
    let $className = "#" + this.className;
    $('#content').load(`./html/content.html ${$className}`);
  };

$home.click(changeContent);
$about_us.click(changeContent);
$tourist_services.click(changeContent);
$contact.click(changeContent);