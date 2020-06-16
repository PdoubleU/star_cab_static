import $ from "jquery";
import { handleClick } from "./burger-button.js";

var $home = $('.home');
var $about_us = $('.about_us');
var $tourist_services = $('.tourist_services');
var $contact = $('.contact');

export function changeContent(e){
    e.preventDefault();
    let $className = "#" + this.className;
    let $fileName = this.className;
    let $contentOffset = ($('#content').offset().top) - 100;
    $('#content').load(`./php/${$fileName}.php ${$className}`);
    $('html').animate({scrollTop: $contentOffset}, 500);
    $('body').animate({scrollTop: $contentOffset}, 500);
    handleClick();
    return false;
  };

$home.click(changeContent);
$about_us.click(changeContent);
$tourist_services.click(changeContent);
$contact.click(changeContent);