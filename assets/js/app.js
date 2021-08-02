$(function(){

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = 0;

    /* Fixed Header */
    $(window).on("scroll load resize", function(){
        introH = $("#intro").innerHeight(); 
        scrollOffset = $(this).scrollTop();

        if(scrollOffset > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed")
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