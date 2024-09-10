import { maskInputs } from "./static/inputmask.js";

import "./parts/sliders.js";
import "./parts/filters.js";
// import "./parts/products-filter.js";
import { range } from "./parts/range.js";
import "./parts/popup.js";
import "./parts/menu.js";
import { stickyHeader } from "./parts/header.js";

import './parts/personVideo.js'
import './parts/quantity.js'
import { toTop } from "./static/to-top.js";
import { Fancybox } from "@fancyapps/ui";


stickyHeader();
range();
maskInputs('+7 (999) 999-99-99', '._mask-phone')
toTop();


Fancybox.bind("[data-fancybox]", {
    Carousel: {
        Panzoom: {
        },
    },
});

const inputItems = [...document.querySelectorAll('input ')].concat([...document.querySelectorAll('textarea ')])
if (inputItems.length) {
    inputItems.forEach(input => {
        if (input.closest('.form__item')) {
            input.addEventListener('input', () => {
                console.log(input.value);
                if (input.value != '') {
                    input.classList.add('_active')
                }
                else {
                    input.classList.remove('_active')
                }
            })
        }
    })
}

function duobleOrderTotal() {
    const totalElem = document.querySelector('[data-entity="basket-total-price"]');
    let price = 0;
    setInterval(() => {
        if (totalElem) {
            price = totalElem.textContent;
        }
        document.querySelectorAll('#total-double').textContent = price
    }, 16);
}
duobleOrderTotal();



document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})


const elems = document.querySelectorAll('.text section tbody tr');
let colors = ''
elems.forEach(item => {
    const td = item.querySelectorAll('td')
    if (td) {
        let text = `label:has(span[title="${(td[0].textContent).toLocaleLowerCase()}"]):after {
        background-color: ${td[2].textContent};
    }`
        colors += text
    }
})

console.log(colors);
