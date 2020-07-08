import $ from 'jquery';

const $OPEN_GDPR = $('#gdpr_read');
const $ACCEPT_GDPR = $('#gdpr_accept');
var $slideBar = $('.slide_bar_gdpr');
var msg = $('.modal_body--gdpr').load('./php/gdpr.php');

export const handleGDPR = () => {
    $slideBar.attr('value', 'confirmed');
    $('.slide_bar_gdpr').removeClass('slide_bar_gdpr--active');
}

export const readGDPR = () => {
    handleGDPR();
    $('.modal--gdpr').css({display: "flex"});
    $('.modal_body--gdpr').append(`${msg}`);
}

$ACCEPT_GDPR.click(handleGDPR);
$OPEN_GDPR.click(readGDPR);
