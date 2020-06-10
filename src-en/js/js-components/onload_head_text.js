import $ from "jquery";

export function slideIn() {
    $('.motto_header').delay(300).animate({opacity: 1.0}, 1500);
    $('.logo').delay(2000).animate({opacity: 1.0}, 2000);
};

$(slideIn);