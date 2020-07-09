import $ from "jquery";

const $SIDE_BAR_VAL = $('.side_bar_gdpr').attr('value');

export const showGDPR = () => {
  if($SIDE_BAR_VAL === 'unconfirmed') {
    $('.side_bar_gdpr').toggleClass('side_bar_gdpr--active');
  }
};

$(setTimeout(showGDPR, 4000));