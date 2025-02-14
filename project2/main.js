
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




document.addEventListener('DOMContentLoaded',() =>{
  const map = L.map('map').setView([42.497978840198634, 27.477080430134198], 20);
  L.tileLayer('	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',).addTo(map);

  const newIcon = L.icon({
    iconUrl: 'https://www.pinpng.com/pngs/m/310-3104493_create-adaptive-icons-for-ionic-cordova-applications-ionic.png',
  

    iconSize:     [35, 35], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


  L.marker([42.497978840198634, 27.477080430134198],{icon: newIcon}).addTo(map)
    .bindPopup('City Library')
    .openPopup();


})

