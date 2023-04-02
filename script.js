let input = document.querySelector('input');

input.onkeypress = function () {
    if (event.keyCode == 13) {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        document.querySelector('ul').appendChild(li);
        input.value = '';
    }
}

document.querySelector('ul').onclick = function () {
    let target = event.target;

    if (target.tagName == 'LI') {
        target.classList.toggle('checked');
    } else if (target.tagName == 'IMG') {
        target.parentElement.remove();
    }
}