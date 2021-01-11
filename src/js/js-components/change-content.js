import $ from "jquery";
import { handleClick } from "./burger-button.js";

const $HOME = $('.home');
const $ABOUT_US = $('.about_us');
const $SERVICES = $('.tourist_services');
const $CONTACT = $('.contact');

export default function changeContent(e){
    e.preventDefault();
    let $className = "#" + this.className;
    let $fileName = this.className;
    let $contentOffset = ($('#content').offset().top) - 100;
    $('#content').load(`./php/${$fileName}.php ${$className}`);
    $('html').animate({scrollTop: $contentOffset}, 500);
    $('body').animate({scrollTop: $contentOffset}, 500);
    //call habdleClick to close the menu list - user's screen is free of no needed content
    handleClick();
    return false;
  };

$HOME.on('click', changeContent);
$ABOUT_US.on('click', changeContent);
$SERVICES.on('click', changeContent);
$CONTACT.on('click', changeContent);