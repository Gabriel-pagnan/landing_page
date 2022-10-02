$('.container_slider').slick({
    dots: true,
    arrows: false,
    Infinity: true,
    centerMode: true,
    centerPadding: 0,
    speed: 1000,
    sliderToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false
});


var menuBtn = document.querySelector('.hamburguer');

menuBtn.addEventListener('click', ()=>{
    let itensMenu = document.querySelector('.active');
    if(itensMenu.classList.contains('show')){
        itensMenu.classList.remove('show');
        itensMenu.classList.add('hide');
    }else{
        itensMenu.classList.remove('hide');
        itensMenu.classList.add('show');
    }
    
});


