import $ from "jquery";

//function is executed while the DOM is loaded and is responsible for animation that shows the logo
export default function slideIn() {
    $('.motto_header').delay(300).animate({opacity: 1.0}, 1500);
    $('.logo').delay(2000).animate({opacity: 1.0}, 2000);
};

$(slideIn);