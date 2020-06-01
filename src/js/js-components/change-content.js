import $ from "jquery";

var $home = $('.home');
var $about_us = $('.about_us');
var $tourist_services = $('.tourist_services');
var $contact = $('.contact');

export function changeContent(e){
    e.preventDefault();
    let $className = "#" + this.className;
    $('#content').load(`./php/content.php ${$className}`);
  };

$home.click(changeContent);
$about_us.click(changeContent);
$tourist_services.click(changeContent);
$contact.click(changeContent);