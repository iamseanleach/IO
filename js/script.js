$( document ).ready(function() {
    console.log( "ready!" );
    
//    $('.nav').click(function(){
//       $.fn.fullpage.destroy('all');
//    });

//    $('.nav').click(function(){
//      if ( $('#fullpage').css('visibility') == 'visible')
//        $('#fullpage').css('visibility','hidden');
//        else $('#fullpage').css('visibility','visible');
//});
//    $('.nav').click(function(){
//      if ( $('#fullpage').css('visibility') == 'visible')
//        $('#listpage').css('visibility','hidden');
//        else $('#listpage').css('visibility','visible');
//});

//    $('.nav').click(function(){
//            $('#fullpage').toggle('#fullpage');
//});
//    
//    $('.toiletList').click(function(){
//            $('#fullpage').toggle('#fullpage');
//});
    
//        $('.nav').click(function(){
//            $('.listpage').toggle('.showListpage');
//            console.log("TOP");
//});
    
    $(".nav").click(function () {
                $(".listpage").animate({
                    top: "-=100vh"
                }, 1000);
                return false;
            });
    
    $(document).ready(function(){
        $('.splashPage').delay(3200).queue(function (next) { 
            $('.splashPage').css('display', 'none'); 
            next(); 
  });
});
    
    
});