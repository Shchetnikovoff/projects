let input = document.querySelector('input');
let ul = document.querySelector('ul');

input.onkeypress = function () {
    if (event.keyCode == 13) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let img = document.createElement('img');


        span.innerHTML = input.value;
        img.setAttribute('src', 'garbage.svg');
        li.appendChild(img);
        li.appendChild(span);
        ul.appendChild(li);
        input.value = '';
    }
}


ul.onclick = function () {
    let target = event.target;

    if (target.tagName == 'LI' || target.tagName == 'SPAN') {
        target.classList.toggle('checked');
    } else if (target.tagName == 'IMG') {
        target.parentElement.remove();
    }
}
document.querySelector('.clear').onclick = function () {
    ul.innerHTML = '';
}

document.querySelector('.finish').onclick = function () {
    let elems = ul.querySelectorAll('li');
    for (let i = 0; i < elems.length; i++) {
        elems[i].classList.add('checked');
    }
}
