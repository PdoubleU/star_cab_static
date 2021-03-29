import $ from "jquery";

const $SIDE_BAR_VAL = $('.side_bar_gdpr').attr('value');

export const showGDPR = () => {
  if(window.localStorage.getItem('gdpr') === 'confirmed') {
    return 0;
  }
  if(window.localStorage.getItem('gdpr') === 'unconfirmed') {
    $('.side_bar_gdpr').toggleClass('side_bar_gdpr--active');
  }
};

$(setTimeout(showGDPR, 4000));