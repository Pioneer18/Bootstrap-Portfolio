$(function(){


    //For mobile devices, set the height of the parallax to the height of the mobile device, so the entire image is seen
    var isMobile;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
     
        // Mobile height fix
        $('.height-fix').each(function(){
         var h = $(this).height();
         $(this).height(h)
        })
       }
})