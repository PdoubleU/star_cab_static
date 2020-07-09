import $ from 'jquery';

const $OPEN_GDPR = $('#gdpr_read');
const $ACCEPT_GDPR = $('#gdpr_accept');
const $READ_AND_ACCEPT = $('.modal_btn--gdpr');
var $sideBar = $('.side_bar_gdpr');

export const acceptGDPR = () => {
    $sideBar.attr('value', 'confirmed');
    $sideBar.removeClass('side_bar_gdpr--active');
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

