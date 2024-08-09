$(window).scroll(function(){
  if ($(this).scrollTop() > 400){  
      $('header').addClass("sticky");
     }
     else{
        $('header').removeClass("sticky");
      }
    });