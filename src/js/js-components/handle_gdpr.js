import $ from 'jquery';

const $OPEN_GDPR = $('#gdpr_read');
const $ACCEPT_GDPR = $('#gdpr_accept');
const $READ = $('.modal_btn--gdpr');
const $SIDE_BAR = $('.side_bar_gdpr');

export function acceptGDPR() {
    $SIDE_BAR.attr('value', 'confirmed');
    $SIDE_BAR.removeClass('side_bar_gdpr--active');
    window.localStorage.setItem('gdpr', 'confirmed');
}

export function readGDPR() {
    $('.modal--gdpr').css({display: "flex"});
    $('.content-container').load('./php/gdpr.php');
}

export function closeGDPR() {
    $SIDE_BAR.attr('value', 'confirmed');
    $SIDE_BAR.removeClass('side_bar_gdpr--active');
    $('.modal--gdpr').css({display: "none"});
    window.localStorage.setItem('gdpr', 'confirmed');
}

$ACCEPT_GDPR.on('click', acceptGDPR);
$OPEN_GDPR.on('click', readGDPR);
$READ.on('click', closeGDPR);

