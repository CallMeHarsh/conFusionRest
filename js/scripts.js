$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});

// JavaScript for reserve modal
$("#rsrvopen").click(function(){
    $("#reserveModal").modal('show');
});
$("#rsrvclose").click(function(){
    $("#reserveModal").modal('hide');
});
$("#rsrvcancel").click(function(){
    $("#reserveModal").modal('hide');
});


// JavaScript for login modal 
$("#loginopen").click(function(){
    $("#loginModal").modal('show');
});

$("#loginclose").click(function(){
    $("#loginModal").modal('hide');        
    });

    $("#logincancel").click(function(){
    $("#loginModal").modal('hide');        
    });