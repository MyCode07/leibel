import { lockPadding, unLockPadding } from "../utils/lockPadding.js";

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.hasAttribute('data-open-popup')) {
        e.preventDefault();
        const id = targetEl.getAttribute('data-id');
        const popup = document.querySelector(`.popup#${id}`);

        if (popup) {
            popup.classList.add('_open')
            lockPadding();
        }
    }

    if (targetEl.classList.contains('popup')) {
        closePopup(targetEl)
    }

    if (targetEl.classList.contains('popup__close') || targetEl.hasAttribute('data-close-popup')) {
        const popup = targetEl.closest('.popup');
        closePopup(popup)
    }

    if (targetEl.classList.contains('callback-widget__open')) {
        targetEl.closest('.callback-widget').classList.toggle('_open');
    }

    if (!targetEl.closest('.callback-widget') && !targetEl.classList.contains('callback-widget') && document.querySelector('.callback-widget._open')) {
        document.querySelector('.callback-widget._open').classList.remove('_open');
    }
})


function closePopup(popup) {
    popup.classList.remove('_open')
    unLockPadding();
}