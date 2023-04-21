var blink_speed = 1000;
var t = setInterval(function () {
    var ele = document.getElementById('flash');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);