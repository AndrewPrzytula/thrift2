$(function() {

    "use strict";

    //===== Prealoder

    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('#sidebar-wrapper .js-scroll-trigger').click(function() {
      $("#sidebar-wrapper").removeClass("active");
      $(".menu-toggle").removeClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    });

    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/biale.png");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/ciemne.png");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //===== Sidebar

    $('[href="#side-menu-left"], .overlay-left').on('click', function (event) {
        $('.sidebar-left, .overlay-left').addClass('open');
    });

    $('[href="#close"], .overlay-left').on('click', function (event) {
        $('.sidebar-left, .overlay-left').removeClass('open');
    });



    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    // Porfolio isotope and filter
    $(window).on('load', function() {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
        aos_init();
      });

      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function() {
        $('.venobox').venobox();
      });
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });

    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true
      });
    }
    $(window).on('load', function() {
      aos_init();
    });






});
