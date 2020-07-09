import $ from 'jquery';

const $OPEN_GDPR = $('#gdpr_read');
const $ACCEPT_GDPR = $('#gdpr_accept');
const $READ_AND_ACCEPT = $('.modal_btn--gdpr');
var $slideBar = $('.slide_bar_gdpr');

export const acceptGDPR = () => {
    $slideBar.attr('value', 'confirmed');
    $('.slide_bar_gdpr').removeClass('slide_bar_gdpr--active');
}

export const readGDPR = () => {
    acceptGDPR();
    $('.modal--gdpr').css({display: "flex"});
    $('.content-container').load('./php/gdpr.php');
}

export const closeGDPR = () => {
    $('.modal--gdpr').css({display: "none"});
}

$ACCEPT_GDPR.click(acceptGDPR);
$OPEN_GDPR.click(readGDPR);
$READ_AND_ACCEPT.click(closeGDPR);

