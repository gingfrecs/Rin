$(function(){
    "usestrict";
    var droplist = $(".my-navbar > div > div"),
        l_item = $(".nav-link"),
        navbar = $("nav"),
        collapseBtn = $(".my-navbar > div > button span")
    
    // DISABLE AFTER CLICKING MAIN LIST
        l_item.on("click", function() {
        droplist.removeClass("show");
    });


    $(window).scroll(function() {                                           // SCROLL BEHAVIORs

        var  scroll = $(this).scrollTop()

            if ( scroll >= "239" ) {               // NAVBAR BEHAVIOR
               
                navbar.addClass("fixed-top")       // FIXING NAVBAR 
                collapseBtn.css("background-color", "#111");
                navbar.css({
                   backgroundColor: "#fff",
                   height: "80px",
                   boxShadow: "1px 12px 13px -10px #11111152"
               })
               $(".nav-link").css("color", "#111");
               $(".my-navbar > div > div").addClass("collapse-color")
               $(".cotation_mark").css("left", "74px")
               $(".my-navbar div div ul li:nth-of-type(1) a").removeClass("cotation_mark_col");
               $(".my-navbar div div ul li:nth-of-type(2) a").addClass("cotation_mark_col");
               $(".navbar-brand .black").css("display", "block")
               $(".navbar-brand .white").css("display", "none")
                
            } else {

                navbar.removeClass("fixed-top")
                collapseBtn.css("background-color", "#fff");
                navbar.css({
                    backgroundColor: "transparent",
                    height: "100px",
                    boxShadow: "none"
                })
                $(".nav-link").css("color", "#fff");
                $(".my-navbar > div > div").removeClass("collapse-color")
                $(".cotation_mark").css("left", "9px")
                $(".my-navbar div div ul li:nth-of-type(2) a").removeClass("cotation_mark_col");
                $(".my-navbar div div ul li:nth-of-type(1) a").addClass("cotation_mark_col");
                $(".navbar-brand .black").css("display", "none")
                $(".navbar-brand .white").css("display", "block")
            }
            
    })
    if ($(window).scrollTop() >= 239 ){
        navbar.addClass("fixed-top")       // FIXING NAVBAR 
                collapseBtn.css("background-color", "#111");
                navbar.css({
                   backgroundColor: "#fff",
                   height: "80px",
                   boxShadow: "1px 12px 13px -10px #11111152"
               })
               $(".nav-link").css("color", "#111");
               $(".navbar-brand .black").css("display", "block")
               $(".navbar-brand .white").css("display", "none")
               $(".my-navbar > div > div").addClass("collapse-color")
    }
    
    $(".navbar-nav li a").click(function (e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top - 100
        }, 50);
    })


   

}) 