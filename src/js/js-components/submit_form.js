import $ from 'jquery';

const $SUBMIT = $('body');

export function sentData() {
    alert('sukces');
    $('.nav-container').innerHTML = '<h3>test</h3>';
}

$SUBMIT.click({sentData}, $('.test-btn'));

