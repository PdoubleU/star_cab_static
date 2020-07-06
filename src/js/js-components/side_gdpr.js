import $ from "jquery";

export const showGDPR = () => {
  $('.slide_bar_gdpr').toggleClass('slide_bar_gdpr--active');
};

$(setTimeout(showGDPR, 5000));