import Swiper from 'swiper';
import { Pagination, Autoplay, Thumbs, FreeMode, Scrollbar } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')

        if (section.closest('.hero')) {
            new Swiper(slider, {
                modules: [Autoplay, Pagination],
                slidesPerView: 1,
                loop: true,
                spaceBetween: 20,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                autoplay: {
                    delay: 4000,
                },
            })
        }
        if (slider.closest('.slider')) {
            new Swiper(slider, {
                modules: [Autoplay, Pagination],
                slidesPerView: 1,
                loop: true,
                spaceBetween: 20,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                autoplay: {
                    delay: 4000,
                },
            })
        }
        else if (slider.closest('.product__slider')) {
            let swiper = new Swiper(".thumbs-slider", {
                modules: [
                    FreeMode, Pagination
                ],
                freeMode: true,
                watchSlidesProgress: true,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                spaceBetween: 10,
                slidesPerView: 4,
            });

            let swiper2 = new Swiper(".main-slider", {
                modules: [Pagination, Thumbs, Scrollbar],
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                thumbs: {
                    swiper: swiper,
                },
            });
        }

    })
}


