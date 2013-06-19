function pwgen(length, upper, lower, numbers, special) {
    var chars = '';
    if(upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(lower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if(numbers) chars += '0123456789';
    if(special) chars += '!#$%&*+-=?@^_~';

    var pw = '';
    chars = chars.split('');
    for(var i = 0; i < length; i++)
        pw += chars[Math.floor(Math.random() * chars.length)];

    return pw;
}

function generate() {
    var length = document.getElementById('length').value;
    var upper = lower = numbers = special = false;
    if(document.getElementById('upper').checked) upper = true;
    if(document.getElementById('lower').checked) lower = true;
    if(document.getElementById('numbers').checked) numbers = true;
    if(document.getElementById('special').checked) special = true;

    var passwords = '';

    for(var i = 0; i < document.getElementById('amount').value; i++)
        passwords += pwgen(length, upper, lower, numbers, special) + '\r\n';

    document.getElementById('passwords').value = passwords.substring(0, passwords.length - 2);
}

function set_stylesheet() {
    var stylesheet = localStorage['pwgen_stylesheet'];
    if (!stylesheet)
        stylesheet = 'style_dark.css';
    document.getElementById('stylesheet').href = stylesheet;
}

function initialize() {
    set_stylesheet();
    document.getElementById('generate').addEventListener('click', generate);
}

window.addEventListener('load', initialize);
