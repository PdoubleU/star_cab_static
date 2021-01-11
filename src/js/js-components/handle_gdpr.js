import $ from 'jquery';

const $OPEN_GDPR = $('#gdpr_read');
const $ACCEPT_GDPR = $('#gdpr_accept');
const $READ_AND_ACCEPT = $('.modal_btn--gdpr');
const $SIDE_BAR = $('.side_bar_gdpr');

export function acceptGDPR() {
    $SIDE_BAR.attr('value', 'confirmed');
    $SIDE_BAR.removeClass('side_bar_gdpr--active');
}

export function readGDPR() {
    acceptGDPR();
    $('.modal--gdpr').css({display: "flex"});
    $('.content-container').load('./php/gdpr.php');
}

export function closeGDPR() {
    $('.modal--gdpr').css({display: "none"});
}

$ACCEPT_GDPR.on('click', acceptGDPR);
$OPEN_GDPR.on('click', readGDPR);
$READ_AND_ACCEPT.on('click', closeGDPR);

