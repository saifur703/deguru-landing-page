(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    /* Best Seller Carousel */
    $('.slide-carousel').owlCarousel({
      items: 4,
      margin: 30,
      loop: true,
      dots: false,
      nav: false,
      navText: [
        "<i class='fa fa-long-arrow-left'></i>",
        "<i class='fa fa-long-arrow-right'></i>",
      ],
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 3,
        },
        991: {
          items: 4,
        },
      },
    });

    /* Register Page Form Input Validation */
    $('#submit').click(function () {
      var hasError = false;
      var passwordVal = $('#password').val();
      var checkVal = $('#password-check').val();
      if (passwordVal == '') {
        $('#password').after(
          '<p style="color: red; background: #fffcd1; padding: 10px;" class="error">Your password must have at least 8 characters and contain a mix of lower case and upper case letters, numbers or special characters (e.g.!@#)</p>'
        );
        hasError = true;
      } else if (checkVal == '') {
        $('#password-check').after(
          '<p style="color: red; background: #fffcd1; padding: 10px;" class="error">Please re-enter your password.</p>'
        );
        hasError = true;
      } else if (passwordVal != checkVal) {
        $('#password-check').after(
          '<p style="color: red; background: #fffcd1; padding: 10px;" class="error">Your password doesn’t match. Please enter again to confirm.</p>'
        );
        hasError = true;
      }
      if (hasError == true) {
        return false;
      }
    });

    $('.mycourse-tab .tab-content').perfectScrollbar();
    $('.purchase-tab .tab-content').perfectScrollbar();
    $('.watch-course-area .tab-content #clesson').perfectScrollbar();

    /* Next Code */
  });

  jQuery(window).on('load', function () {
    // Code
    /* 
    Register error page
View course page
My profile page (w profile change pic and edit profile, should be a popup)
Watch course
View cart
    
    */
  });
})(jQuery);
