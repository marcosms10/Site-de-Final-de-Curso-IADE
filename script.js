/*========== SEARCH ==========*/ 
const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content');

/*========== SEARCH SHOW ==========*/ 
if(searchButton) {
    searchButton.addEventListener( 'click', () =>{
        searchContent.classList.add( 'show-search')
})
}
/*========== SEARCH MENU ========== */

if(searchClose) {
    searchClose.addEventListener( 'click', ()=> {
        searchContent.classList.remove( 'show-search')
})
}

/*========== SHADOW HEADER ========== */

const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header') 
}
window.addEventListener('scroll', shadowHeader)

/*========== HOME SWIPER /*========== */

let swiperHome = new Swiper('.home-swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides:'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }

});

/*========== NEW SWIPER ========== */

let swiperNew = new Swiper('.new-swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }

});

/*========== SCROLL UP ========== */

const scrollUp = () =>{
    const scrollUp = document.getElementById( "scroll-up" );
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*========== SCROLL SECTIONS ACTIVE LINK ========== */

const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId +']')

    if(scrollDown > sectionTop && scrollDown <=sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link')
    }else{
        sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*========== DARK LIGHT THEME ========== */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line'  ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

