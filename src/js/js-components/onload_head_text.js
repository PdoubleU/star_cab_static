import $ from "jquery";

export function slideIn() {
    $('.motto_header').delay(800).animate({opacity: 1.0}, 2500);
    $('.logo').delay(3500).animate({opacity: 1.0}, 3500);
};

$(slideIn);