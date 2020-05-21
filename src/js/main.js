import $ from 'jquery';
import {handleClick} from "./js-components/burger-button";
import {changeContent} from "./js-components/change-content";
import {scroll, scrollTop} from "./js-components/scroll_button_mobile";

$(document).ready(handleClick, changeContent, scroll, scrollTop);