$(function() {
    "usestrict";
  var  listbtn = $(".menu-collapse button"),
       listlink = $(".main_list nav ul li a")

    // ADJUSTING COLLAPSE BEHAVIORS
    listbtn.click(function () {
        $(".main_list").toggleClass("open")
        $(".main").toggleClass("open")
    });
    listlink.click(function() {
        $(".main_list").removeClass("open")
        $(".main").removeClass("open")
    })
    $(window).on("resize", function() {
       if ($(window).outerWidth() >= 992) {
           $(".main_list").removeClass("open")
           $(".main").removeClass("open")
      }
    })
    if ($(window).outerWidth() >= 992) {
       $(".main_list").removeClass("open")
       $(".main").removeClass("open")
    }
    // HOME BUTTON
    $(".home_btn").click(function() {
        $(window).scrollTop(0)
    });

    // SMOOTH SCROLL TO SECTIONS
    $(".sections-menu li a").click(function (e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top
        }, 50);
    })
    // HOME BUTTON APPERANCE 
    $(window).scroll(function() {

        var  scroll = $(this).scrollTop()

            if ( scroll >= "450" ) {               
               $(".home_btn").css("opacity", "1");

            } else {
                $(".home_btn").css("opacity", "0");
            }
    })
    // SKILLS LINES ANIMATION ON SCROLL
    $(window).scroll(function() {
        var  scroll = $(this).scrollTop()
            if ( scroll >= "260" ) {  
                $(".skills_info .line:first-of-type span").addClass("lin1")
                $(".skills_info .line:nth-of-type(2) span").addClass("lin2")
                $(".skills_info .line:last-of-type span").addClass("lin3")
            } 
    })
    // SKILLS LINES ANIMATION ON LOAD
    if( $(window).scrollTop() >= 260 ) {
        $(".skills_info .line:first-of-type span").addClass("lin1")
        $(".skills_info .line:nth-of-type(2) span").addClass("lin2")
        $(".skills_info .line:last-of-type span").addClass("lin3")
        $(".home_btn").css("opacity", "1");
    }
    // BOX HOVER OF SERVICES SECTION
    $(".boxx").hover(function(){
        $(this).css({
            WebkitTransform: "translateY(-15px)",
            MozTransform: "translateY(-15px)",
            OTransform: "translateY(-15px)",
            MsTransform: "translateY(-15px)",
            transform: "translateY(-15px)",
        })
    }, function() {
        $(this).css({
            WebkitTransform: "translateY(0)",
            MozTransform: "translateY(0)",
            OTransform: "translateY(0)",
            MsTransform: "translateY(0)",
            transform: "translateY(0)",
        })
    })
    // WORKS SECTION FILTERING
     $(".projects").isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
     })
     $("ul .filter, li").on("click", function(e) {
     var filter = $(this).attr('data-filter')
 
     e.preventDefault();
     $("ul .filter, li").removeClass("active");
     $(this).addClass("active")
 
     $(".projects").isotope({filter: filter})
     })
     // ANIMATION ON SCROLL LIBRARY
     AOS.init({
         duration: 1000,
         once: true,
     });


    
     console.log(  )
})