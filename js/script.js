// ------------------------- active the header when scrolling -----------------------------


const header = document.querySelector('header');

window.addEventListener("scroll", () => {
    if(scrollY > 0){
        header.classList.add("active");
    }else {
        header.classList.remove("active");
    }
})


// ----------------------------------- nav toggler ----------------------------- 


const navToggler = document.querySelector('#nav-toggler');
const navbar = document.querySelector('.navbar');

navToggler.addEventListener("click", () => {
    navToggler.classList.toggle("uil-times");
    navbar.classList.toggle("active");
})

window.addEventListener("scroll", () => {
    navToggler.classList.remove("uil-times");
    navbar.classList.remove("active");
})


// -------------------  window on scroll animted the progressbar -------------------


const skillSection = document.querySelector('.skills__section'),
    progressBar = document.querySelectorAll('.progress-bar');


function activeProgress(){
    progressBar.forEach(e => {
        let data = e.dataset.progress;
        e.style.opacity = 1;
        e.style.width = data + '%';
    })
}


function hideProgress(){
    progressBar.forEach(e => {
        e.style.opacity = 0;
        e.style.width = 0;
    })
}

window.addEventListener("scroll", () => {
    const sectionTop = skillSection.getBoundingClientRect().top;
    const windowPos = window.innerHeight;

    if(sectionTop < windowPos){
        activeProgress();
    }else {
        hideProgress();
    }

})



var swiper = new Swiper(".home-container", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    loop:true,
});



// ------- active section menu when scrolling --------------

const sections = document.querySelectorAll('section');
navLinks = document.querySelectorAll('.navbar a');

window.addEventListener("scroll", () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute("id");
        }
    })

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.classList.contains(current)){
            link.classList.add("active");
        }
    })

})

window.addEventListener("load", () => {

    let preloader = document.querySelector('.preloader');

    setTimeout(() => {
        preloader.classList.add("remove");
    },1000)


    AOS.init();
})
