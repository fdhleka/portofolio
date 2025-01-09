// hamburger
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const toTop = document.querySelector("#to-top");
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

AOS.init({
    duration: 1000, // Durasi animasi (ms)
    once: true, // Animasi hanya dijalankan sekali
});

//klik hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navmenu) {
        hamburger.classList.remove('hamburger-active');
        navmenu.classList.add('hidden');
    }
});

// darkmode 
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//pindahkan posisi toggle sesuai mode 
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            darkToggle.checked = true;
        }else {
            document.documentElement.classList.remove('dark');
            darkToggle.checked = false;
        }