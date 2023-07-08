let popup = document.querySelector('.popup')
let closed = document.querySelector('.popup__message__close')
let button = document.querySelector('.button')

button.onclick = function() {
    popup.classList.add('popup--active')

}

closed.onclick = function() {
    popup.classList.remove('popup--active')
}


