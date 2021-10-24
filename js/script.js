
function showText(x) {
    let el = document.getElementById('thumb' + x);
    el.classList.remove('hidden');
    el.classList.add('visible');
}

function hideText(x) {
    let el = document.getElementById('thumb' + x);
    el.classList.add('hidden');
    el.classList.remove('visible');
}