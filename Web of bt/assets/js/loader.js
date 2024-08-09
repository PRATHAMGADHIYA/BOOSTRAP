$(window).on("load",function(){
    $(".page-load").delay(2000).fadeOut(500);
    $(".page-load").delay(2300).fadeOut(500);
      setInterval(function(){
        $("body").removeClass("hidden");
    },2500);
});