import $ from "jquery";

const $SLIDE_BAR_VAL = $('.slide_bar_gdpr').attr('value');

export const showGDPR = () => {
  if($SLIDE_BAR_VAL === 'unconfirmed') {
    $('.slide_bar_gdpr').toggleClass('slide_bar_gdpr--active');
  }
};

$(setTimeout(showGDPR, 4000));