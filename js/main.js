// var pizza = {
//   small: 800,
//   medium: 1000,
//   large:1200,
//   crust: {},
//   toppings: {}
// };
// pizza.crust = {
//   crispy: 200,
//   stuffed: 300,
//   gluttenFree: 400
// };
// pizza.toppings = {
//   pepperoni: 150,
//   mushrooms: 150,
//   bacon: 150,
//   sausage: 150,
//   blackOlives: 150,
//   cheese: 150
// };


var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
