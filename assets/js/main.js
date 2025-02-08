jQuery(document).ready(function($) {
    jQuery('.stellarnav').stellarNav({
theme: 'plain', // adds default color to nav. (light, dark)
breakpoint: 991, // number in pixels to determine when the nav should turn mobile friendly
menuLabel: '', // label for the mobile nav
sticky: false, // makes nav sticky on scroll (desktop only)
position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
openingSpeed: 250, // how fast the dropdown should open in milliseconds
closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
showArrows: true, // shows dropdown arrows next to the items that have sub menus
phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
phoneLabel: 'Call Us', // label for the phone button
locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
locationLabel: 'Location', // label for the location button
closeBtn: false, // adds a close button to the end of nav
closeLabel: 'Close', // label for the close button
mobileMode: false,
scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
});

// slider js populer courses sction
jQuery('.populer-courses-section .all-card').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    centerMode: false,
    infinite: true,
    slidesToScroll:3,
    prevArrow:'<div class="slick-prev"><i class="bx bx-chevron-left"></i></div>',
    nextArrow:'<div class="slick-next"><i class="bx bx-chevron-right"></i></div>',
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        },
      },
    ],


    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        },
      },
    ],

  });




jQuery('.our-experienced-staffs-section .all-card').slick({
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  centerMode: false,
  infinite: true,
  slidesToScroll:3,
  prevArrow:'<div class="slick-prev"><i class="bx bx-chevron-left"></i></div>',
  nextArrow:'<div class="slick-next"><i class="bx bx-chevron-right"></i></div>',
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }
  ],

  responsive: [
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }
  ]

});


jQuery('.job-updates-section .all-card').slick({
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  centerMode: false,
  infinite: true,
  slidesToScroll:3,
  prevArrow:'<div class="slick-prev"><i class="bx bx-chevron-left"></i></div>',
  nextArrow:'<div class="slick-next"><i class="bx bx-chevron-right"></i></div>',
  draggable: true,
  responsive: [
    {
      breakpoint: 416,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      },
    },
  ],

});


}); //document  ready close

const date = new Date()
const year = date.getFullYear()
document.getElementById("year").textContent = year














































// function Person(name,age){
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("tanmoy mondal",20);
// const person2 = new Person("samiran",23)

// console.log(person1);
// console.log(person2.age)

// // constructor function 
// // this function helps to create an object



