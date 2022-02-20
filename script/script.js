// Slider-Card 1
let span = document.getElementsByClassName('fas');
    let product = document.getElementsByClassName('product')
    let product_page = Math.ceil(product.length/4);
    let l = 0;
    let movePer = 25.34;
    let maxMove = 203;

    let right_mover = ()=>{
        l = l + movePer;
        if (product == 1){l = 0; }
        for(const i of product)
        {
            if (l > maxMove){l = l - movePer;}
            i.style.left = '-' + l + '%';
        }

    }
    let left_mover = ()=>{
        l = l - movePer;
        if (l<=0){l = 0;}
        for(const i of product){
            if (product_page>1){
                i.style.left = '-' + l + '%';
            }
        }
    }
    span[1].onclick = ()=>{right_mover();}
    span[0].onclick = ()=>{left_mover();}
// Slider-Card 1



'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;
// coding with nick
window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
// coding with nick
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);

}

// Card-Slider-2

let span2 = document.getElementsByClassName('faso');
    let products = document.getElementsByClassName('products')
    let product_pages = Math.ceil(products.length/4);
    let u = 0;
    let movePers = 25.34;
    let maxMoves = 203;

    let right_move = ()=>{
        u = u + movePers;
        if (products == 1){u = 0; }
        for(const i of products)
        {
            if (u > maxMoves){u = u - movePers;}
            i.style.left = '-' + u + '%';
        }

    }
    let left_move = ()=>{
        u = u - movePers;
        if (u<=0){u = 0;}
        for(const i of products){
            if (product_pages>1){
                i.style.left = '-' + l + '%';
            }
        }
    }
    span2[1].onclick = ()=>{right_move();}
    span2[0].onclick = ()=>{left_move();}
// Slider-Card 2

// Click back to top
function clicktotop(){
    $(window).scrollTop(0);
}
