var nav1 = document.getElementById('nav1');
var nav2 = document.getElementById('nav2');
var nav3 = document.getElementById('nav3');
var nav4 = document.getElementById('nav4');
var sec2 = document.getElementById('sec2');
var sec3 = document.getElementById('sec3');
var sec4 = document.getElementById('sec4');
var sec5 = document.getElementById('sec5');

const colorNavEl = (toColor) => {
    nav1.style.color = "#fdfdff";
    nav2.style.color = "#fdfdff";
    nav3.style.color = "#fdfdff";
    nav4.style.color = "#fdfdff";

    toColor.style.color = "#ffdc08";
}

window.addEventListener("scroll", changeNavBg = () => {
    const nav = document.querySelector("#navBar");
    nav.style.backgroundColor = "#484d52";

    var bounding2 = sec2.getBoundingClientRect();
    var bounding3 = sec3.getBoundingClientRect();
    var bounding4 = sec4.getBoundingClientRect();

    if ((bounding2.top >= -sec2.offsetHeight + 10)
        && (bounding2.bottom <= (window.innerHeight || document.documentElement.clientHeight) + sec2.offsetHeight + 10)){

        colorNavEl(nav1);
    }
    else if ((bounding3.top >= -sec3.offsetHeight + 10)
        && (bounding3.bottom <= (window.innerHeight || document.documentElement.clientHeight) + sec3.offsetHeight) + 10){

        colorNavEl(nav2);
    }
    else if ((bounding4.top >= -sec4.offsetHeight + 10)
        && (bounding4.bottom <= (window.innerHeight || document.documentElement.clientHeight) + sec4.offsetHeight) + 10){

        colorNavEl(nav3);
    }
    else {

        colorNavEl(nav4);
    }
})

const scrollToNext = () => {
    sec2.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

const navClick = (id) => {
    switch (id){
        case "nav1":
            sec2.scrollIntoView({ behavior: 'smooth', block: "start"});
            break;
        case "nav2":
            sec3.scrollIntoView({ behavior: 'smooth', block: 'start'});
            break;
        case "nav3":
            sec4.scrollIntoView({ behavior: 'smooth', block: 'start'});
            break;
        case "nav4":
            sec5.scrollIntoView({ behavior: 'smooth', block: 'start'});
            break;
        case "nav1m":
            sec2.scrollIntoView({ behavior: 'smooth', block: "start"});
            break;
        case "nav2m":
            sec3.scrollIntoView({ behavior: 'smooth', block: 'start'});
            break;
        case "nav3m":
            sec4.scrollIntoView({ behavior: 'smooth', block: 'start'});
            break;
        case "nav4m":
            sec5.scrollIntoView({ behavior: 'smooth', block: 'start'});
            break;
    }
}


const flipCard = (id) => {
    const toFlip = document.getElementById(id);
    const divs = toFlip.children;
    if(divs[0].style.display === "none"){
        divs[0].style.display = "flex";
        divs[1].style.display = "none";
    }else{
        divs[0].style.display = "none";
        divs[1].style.display = "block";
    }

}



let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
    document.getElementById('Lightbox').style.display = 'inline';
}

function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
}


function changeSlide(n) {
    showSlide(slideIndex += n);
}

function toSlide(n) {
    showSlide(slideIndex = n);
}


function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = 'block';
}

const validate = (id) => {
    const input = document.getElementById(id)
    let warning;
    switch (id){
        case "name":
            warning = document.getElementById("noName")
            if(input.value === ""){
                warning.style.display = "block";
            }else{
                warning.style.display = "none";
            }
            break;
        case "lastName":
            warning = document.getElementById("noLastName")
            if(input.value === ""){
                warning.style.display = "block";
            }else{
                warning.style.display = "none";

            }
            break;
        case "email":
            warning = document.getElementById("noEmail")
            if(input.value === ""){
                warning.style.display = "block";
            }else{
                warning.style.display = "none";
            }
            var re = /\S+@\S+\.\S+/;
            let warning2 = document.getElementById("wrongEmail");
            if(!re.test(input.value)){
                warning2.style.display = "block";
            }else{
                warning2.style.display = "none";
            }
            break;
    }
}


let slideIndexMobile = 1;
showSlidesMobile(slideIndexMobile);

function plusSlides(n) {
    showSlidesMobile(slideIndexMobile += n);
}

function currentSlide(n) {
    showSlidesMobile(slideIndexMobile = n);
}

function showSlidesMobile(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndexMobile = 1}
    if (n < 1) {slideIndexMobile = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexMobile-1].style.display = "block";
    dots[slideIndexMobile-1].className += " active";
}

function menu(id) {
    const mobileNav = document.getElementById("mobileNav")
    if(id === "openMenu"){
        mobileNav.style.display = "flex";
    }else if(id === "closeMenu"){
        mobileNav.style.display = "none";
    }
}