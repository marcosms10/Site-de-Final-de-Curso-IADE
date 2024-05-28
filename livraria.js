const select = document.querySelector(".select")
const options_list = document.querySelector(".option-list")
const options = document.querySelectorAll(".option")

//Show & hide options list

    select.addEventListener("click", () => {
    options_list.classList.toggle("active")
    select.querySelector(".ri-arrow-down-s-line").classList.toggle
    ("ri-arrow-up-s-line")
});

//Select Option
options.forEach((option) => {
     option.addEventListener("click", () => {
        options.forEach((option) => {option.classList.remove('selected')})
        select.querySelector("span").innerHTML = option.innerHTML
        option.classList.add("selected")
        options_list.classList.toggle("active")
        select.querySelector(".ri-arrow-down-s-line").classList.toggle
        ("ri-arrow-up-s-line")
    })
}) 

/*========== VIZUALIZADOS ========== */

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.vizu-column.swiper', {
        slidesPerView: 'auto',  // Ajusta automaticamente com base no tamanho do slide
        spaceBetween: 20,       // Espaço entre os slides
        loop: true,             // Permite o loop contínuo dos slides
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1124: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1220: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
});

