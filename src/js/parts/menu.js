import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';
import { gsap } from 'gsap'


const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const allMenuLinks = document.querySelectorAll('nav ul li a');
const menuCloseBtn = document.querySelector('._close');
if (burger) {
    burger.addEventListener('click', (e) => {
        menu.classList.toggle('_open');

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding();
        }

        // if (searchPopup.classList.contains('_open')) {
        //     searchPopup.classList.remove('_open')
        // }
        // if (catalogMenu.classList.contains('_open')) {
        //     catalogMenu.classList.remove('_open')
        //     openCatalogBtns.forEach(btn => {
        //         btn.classList.remove('_active');
        //     })
        // }
    })
}
menuCloseBtn.addEventListener('click', (e) => {
    menu.classList.remove('_open');
})

if (allMenuLinks.length) {
    allMenuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            if (menu.classList.contains('_open')) {
                menu.classList.remove('_open');
                unLockPadding();
            }
        })
    })
}


// menu arrow buttom
const arrow = `<button><svg class="catalog-arrow" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.5L6 5.5L11 0.5" stroke="#37584D" stroke-width="1.25" />
                        </svg>
</button>`;

// add menu summenu opener button
const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (btn) {
                btn.addEventListener('click', function (e) {
                    toggleMenu(li)
                })
            }
        }
    })

    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }
}




const openCatalogBtns = document.querySelectorAll('[data-open-catalog]');
const catalogMenu = document.querySelector('.catalog-menu')

if (openCatalogBtns.length) {
    openCatalogBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            catalogMenu.classList.toggle('_open');
            btn.classList.toggle('_active');

            if (btn.classList.contains('_active')) {
                lockPadding();
            }
            else {
                unLockPadding();
            }

            // if (searchPopup.classList.contains('_open')) {
            //     searchPopup.classList.remove('_open')
            // }
            if (menu.classList.contains('_open')) {
                menu.classList.remove('_open')
                burger.classList.remove('_active');
            }
        })
    })
}

// const openSearchBtn = document.querySelectorAll('[data-open-search]');
// const searchPopup = document.querySelector('.search-popup')

// if (openSearchBtn.length) {
//     openSearchBtn.forEach(btn => {
//         btn.addEventListener('click', (e) => {
//             e.preventDefault();
//             searchPopup.classList.toggle('_open');
//             btn.classList.toggle('_active');

//             if (btn.classList.contains('_active')) {
//                 lockPadding();
//             }
//             else {
//                 unLockPadding();
//             }

//             if (catalogMenu.classList.contains('_open')) {
//                 catalogMenu.classList.remove('_open')
//                 openCatalogBtns.forEach(btn => {
//                     btn.classList.remove('_active');
//                 })
//             }
//             if (menu.classList.contains('_open')) {
//                 menu.classList.remove('_open')
//                 burger.classList.remove('_active');
//             }
//         })
//     })
// }

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    // if (!targetEl.hasAttribute('data-open-catalog') && !targetEl.closest('.catalog-menu') &&
    //     !targetEl.classList.contains('catalog-menu') && catalogMenu.classList.contains('_open')) {
    //     catalogMenu.classList.remove('_open');
    //     unLockPadding();

    //     openCatalogBtns.forEach(btn => {
    //         btn.classList.remove('_active');
    //     })
    // }

    // if (targetEl.classList.contains('search-popup__close')) {
    //     searchPopup.classList.remove('_open');
    //     unLockPadding();
    // }
})