$(function(){

    var header = $("#header"),
        introH = $("#intro").innerHeight(),

        scrollOffset = 0;

    /* Fixed Header */
    $(window).on("scroll load resize", function(){
        introH = $("#intro").innerHeight();
        
        AboutOffset = $("#about").offset().top;
        ServiceOffset = $("#services").offset().top;
        WorkOffset = $("#works").offset().top;
        BlogOffset = $("#blog").offset().top;
        FooterOffset = $("#footer").offset().top;

        scrollOffset = $(this).scrollTop();

        blockAboutH = (ServiceOffset);

        if(scrollOffset > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed")
        }

        if(scrollOffset >= AboutOffset){
            $("#nav a").removeClass("active");
            $('[data-scroll="#about"]').addClass("active"); 
        } else {
            $("#nav a").removeClass("active");
        }
        if(scrollOffset >= ServiceOffset){
            $("#nav a").removeClass("active");
            $('[data-scroll="#services"]').addClass("active"); 
        } 
        if(scrollOffset >= WorkOffset){
            $("#nav a").removeClass("active");
            $('[data-scroll="#works"]').addClass("active"); 
        } 
        if(scrollOffset >= BlogOffset){
            $("#nav a").removeClass("active");
            $('[data-scroll="#blog"]').addClass("active"); 
        } 
        if(scrollOffset >= FooterOffset - 160){
            $("#nav a").removeClass("active");
            $('[data-scroll="#footer"]').addClass("active"); 
        } 
       
    });

    /* Smoth Scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top + 1;

        $("#nav a").removeClass("active");
        $this.addClass("active"); 

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000)
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active");
    });

    /* Collapse*/
    $("[data-collapse]").on("click", function(enevt){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("collapse");

        $this.toggleClass("active");
    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});
