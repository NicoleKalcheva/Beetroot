
const listItems = document.querySelectorAll('.hero_li');

// добавям event for li
listItems.forEach(item => {
    item.addEventListener('click', () => {
        const circle = item.querySelector('.circle');
        circle.classList.toggle('filled'); 
        item.classList.toggle('clicked'); 
    });
});


$(document).ready(function(){

  $('.hero_carousel').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    vertical:true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    fade: false,
    speed: 800,
    nextArrow:'<button type="button" class="slick-next"><img src="./IMG/Arrow.svg" alt=""></button>'
    
   
  }
    
  );
});
   

  $(document).ready(function(){
$('.news_carousel').slick({
  slidesToShow: 3 ,  
  slidesToScroll: 3,
  autoplay: false,
  autoplaySpeed: 4000,
  dots: true,
  arrows: true,
  useCSS:true,
  prevArrow:'<button type="button" class="slick-prev"><img src="./IMG/Arrow.svg" alt=""></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="./IMG/Arrow.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,  
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
});

lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom, lgFullscreen],
});