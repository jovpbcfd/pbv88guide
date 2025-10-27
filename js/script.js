
  

//page loader

$(window).on('load', function() {

  $('#pageloader').fadeOut();   
  $('body').fadeIn();    
})



const $menu = jQuery('#pb-burger');

  jQuery(document).mouseup(e => {
    if (!$menu.is(e.target) 
     && $menu.has(e.target).length === 0) 
     {
      jQuery("#burgerNav").removeClass('displayShow');
      jQuery("header").removeClass("pb-burger-nav-open blurred");
      jQuery('footer').removeClass('pb-burger-nav-open blurred');
      jQuery("body").removeClass("pb-burger-nav-enable");
      jQuery("main").removeClass("blurred");
    }
});


function pbBurgerNav() {
    
  jQuery("#burgerNav").toggleClass("displayShow");


  
  if(jQuery( "#burgerNav" ).hasClass( "displayShow" )){
    jQuery("header").addClass("pb-burger-nav-open").addClass("blurred");
     jQuery('footer').addClass('pb-burger-nav-open').addClass('blurred');
    
      jQuery("body").addClass("pb-burger-nav-enable");
      jQuery("main").addClass("blurred");
  } else {
    jQuery("header").removeClass("pb-burger-nav-open").removeClass("blurred");
    jQuery('footer').removeClass('pb-burger-nav-open').removeClass('blurred');
      jQuery("body").removeClass("pb-burger-nav-enable");
      jQuery("main").removeClass("blurred");
  }
  
}


/**Language Popup */


// $(document).ready(function() {
//   // When the button is clicked
//   $('#multi-lang').click(function() {
//     // Show the popup div
//     $('#lang-popup').fadeIn();
//     $('#lang-pop-overlay').fadeIn(); 
//   });

//    // When the "Close" button inside the popup is clicked, hide the popup
//    $('#lang-popup #close-btn').click(function() {
//     $('#lang-popup').fadeOut();
//     $('#lang-pop-overlay').fadeOut(); 
//   });


//  // Close the popup when clicking anywhere on the overlay
//   $('#overlay').click(function() {
//     $('#popupDiv').fadeOut();
//     $('#overlay').fadeOut();  // Hide the dimmed background
//   });
// });
