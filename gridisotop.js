$(document).ready(function(){
	
var $grid=$('.portfolio-active').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

  // active
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
  });
  // sticky menu
    $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 245) {
    $(".header-middle").removeClass("scroll-header");
   }else{
    $(".header-middle").addClass("scroll-header");
   }
  });
  // Zoom img
 $(".zoom05").elevateZoom({
  zoomType				: "inner",
  cursor: "crosshair"
});

 $('select').niceSelect();












})