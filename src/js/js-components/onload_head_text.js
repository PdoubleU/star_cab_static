import $ from "jquery";

export function slideIn() {
    $('.motto_header').delay(400).animate({opacity: 1.0}, 2000);
    $('.logo').delay(3000).animate({opacity: 1.0}, 3000);
};

$(slideIn);