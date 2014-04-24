$(function() {

    var $container = $('#container');

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            for (var k = 0; k < 10; k++) {
                var num = '' + i + j + k;
                // The digits you remember
                $container.append(createTest("54564804" + num + "542879"));
            }
        }
    }

    $container.find('.invalid').hide();
});

function createTest(number) {
    var isValid = mod10_check(number);

    return $('<div />')
        .html(splitText(number, 4))
        .css({
            backgroundColor: isValid ? '#0f0' : 'red'
        })
        .addClass(isValid ? 'valid' : 'invalid')
        .click(function() { $(this).remove(); });
}

function splitText(text, nth) {
    return text.substring(0, 4) + " " + text.substring(4, 8) + " " + text.substring(8, 12) + " " + text.substring(12);
}

function mod10_check(val){
    var nondigits = new RegExp(/[^0-9]+/g);
    var number = val.replace(nondigits,'');
    var pos, digit, i, sub_total, sum = 0;
    var strlen = number.length;
    if(strlen < 13){ return false; }
    for(i=0;i<strlen;i++){
        pos = strlen - i;
        digit = parseInt(number.substring(pos - 1, pos));
        if(i % 2 == 1){
            sub_total = digit * 2;
            if(sub_total > 9){
                sub_total = 1 + (sub_total - 10);
            }
        } else {
            sub_total = digit;
        }
        sum += sub_total;
    }
    if(!sum){ return false; }
    if(sum % 10 == 0){
        return true;
    }
    return false;
}